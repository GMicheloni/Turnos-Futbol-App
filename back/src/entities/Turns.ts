import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { User } from './User'

@Entity({ name: 'turns' })
export class Turn {
  @PrimaryGeneratedColumn()
  id: number
  @Column({ length: 20 })
  date: string
  @Column({ length: 20 })
  time: string
  @Column({ default: true })
  status: boolean
  @ManyToOne(() => User, (user) => user.turns)
  user: User
}
