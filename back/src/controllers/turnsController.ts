import { Request, Response } from 'express'
import {
  cancelTurnService,
  createTurnService,
  getAllTurnsService,
  getTurnByIdService,
} from '../services/turnService'

export const getTurnByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id)

  if (isNaN(id)) {
    res.status(400).json({ message: 'ID inválido' })
  }

  const turn = await getTurnByIdService(id)

  if (!turn) {
    res.status(404).json({ message: 'Turno no encontrado' })
  }

  res.status(200).json(turn)
}

export const createTurnController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { date, time, userId } = req.body

  if (!date || !time || !userId) {
    res.status(400).json({ message: 'Faltan datos del turno' })
  }

  try {
    const newTurn = await createTurnService(date, time, Number(userId))
    res.status(201).json(newTurn)
  } catch (error) {
    res.status(400).json({ message: (error as Error).message })
  }
}

export const cancelTurnController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id)

  if (isNaN(id)) {
    res.status(400).json({ message: 'ID inválido' })
  }

  try {
    const canceledTurn = await cancelTurnService(id)
    res.status(200).json(canceledTurn)
  } catch (error) {
    res.status(404).json({ message: (error as Error).message })
  }
}

export const getAllTurnsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const turns = await getAllTurnsService()

  if (turns.length === 0) {
    res.status(404).json({ message: 'No se encontraron turnos' })
  }

  res.status(200).json(turns)
}
