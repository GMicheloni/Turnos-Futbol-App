import { User } from '../entities/User'
import { Request, Response } from 'express'
import {
  createUserService,
  getAllUserService,
  getUserByIdService,
  loginUserService,
} from '../services/userService'

export const getAllUsersController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await getAllUserService()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Error getting users', error })
  }
}

export const getUserByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const user = await getUserByIdService(Number(id))
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: 'Error getting user by id', error })
  }
}

export const createUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newUser = await createUserService(req.body)
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({ message: (error as Error).message })
  }
}

export const loginUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { username, password } = req.body

  if (!username || !password) {
    res.status(400).json({ message: 'Username y password requeridos' })
  }

  try {
    const response = await loginUserService(username, password)
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ message: (error as Error).message })
  }
}
