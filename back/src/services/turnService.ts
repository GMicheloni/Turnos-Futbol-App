import { Turn } from '../entities/Turns'
import { turnRepository, userRepository } from '../repositories'

export const getTurnByIdService = async (id: number): Promise<Turn | null> => {
  const turn = await turnRepository.findOne({
    where: { id },
  })

  return turn
}

export const createTurnService = async (
  date: string,
  time: string,
  userId: number
): Promise<Turn> => {
  const user = await userRepository.findOneBy({ id: userId })

  if (!user) {
    throw new Error('Usuario no encontrado')
  }

  const newTurn = turnRepository.create({
    date,
    time,
    status: true,
    user,
  })

  await turnRepository.save(newTurn)
  return newTurn
}

export const cancelTurnService = async (id: number): Promise<Turn> => {
  const turn = await turnRepository.findOneBy({ id })

  if (!turn) {
    throw new Error('Turno no encontrado')
  }

  turn.status = false
  await turnRepository.save(turn)

  return turn
}

// src/services/turn.service.ts
export const getAllTurnsService = async (): Promise<Turn[]> => {
  const turns = await turnRepository.find({ relations: ['user'] })

  return turns
}
