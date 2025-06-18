import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Turn } from './Turns'
import { Credential } from './Credentials'

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100 })
  name: string

  @Column({ length: 100 })
  email: string

  @Column({ length: 25 })
  birthdate: string

  @Column({ length: 20 })
  dni: string

  @OneToOne(() => Credential)
  @JoinColumn()
  credentials: Credential

  @OneToMany(() => Turn, (turn) => turn.user)
  turns: Turn[]
}
