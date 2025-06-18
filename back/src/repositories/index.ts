import { AppDataSource } from '../config/appDataSource'
import { Credential } from '../entities/Credentials'
import { Turn } from '../entities/Turns'
import { User } from '../entities/User'

export const userRepository = AppDataSource.getRepository(User)
export const turnRepository = AppDataSource.getRepository(Turn)
export const credentialRepositoriy = AppDataSource.getRepository(Credential)
