import { DataSource } from 'typeorm'
import { User } from '../entities/User'
import { Credential } from '../entities/Credentials'
import { Turn } from '../entities/Turns'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'm2',
  /* dropSchema: true, */
  synchronize: true,
  logging: false,
  entities: [User, Credential, Turn],
  subscribers: [],
  migrations: [],
})
