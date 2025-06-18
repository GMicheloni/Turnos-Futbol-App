import { User } from '../entities/User'
import { credentialRepositoriy, userRepository } from '../repositories'

export const getAllUserService = async (): Promise<User[]> =>
  await userRepository.find()

export const getUserByIdService = async (id: number): Promise<User | null> => {
  try {
    const user = await userRepository.findOne({
      where: { id },
      relations: ['turns'],
    })
    return user
  } catch (error) {
    throw new Error('usuario no encontrado')
  }
}

export const createUserService = async (data: {
  name: string
  email: string
  birthdate: string
  dni: string
  username: string
  password: string
}): Promise<User> => {
  const { name, email, birthdate, dni, username, password } = data

  const existingUser = await userRepository.findOne({ where: { email } })
  if (existingUser) {
    throw new Error('El email ya está registrado')
  }

  const existingCredential = await credentialRepositoriy.findOne({
    where: { username },
  })
  if (existingCredential) {
    throw new Error('El nombre de usuario ya está en uso')
  }

  const credential = credentialRepositoriy.create({ username, password })
  await credentialRepositoriy.save(credential)

  const user = userRepository.create({
    name,
    email,
    birthdate,
    dni: dni,
    credentials: credential,
  })

  await userRepository.save(user)
  return user
}

export const loginUserService = async (username: string, password: string) => {
  const credential = await credentialRepositoriy.findOne({
    where: { username },
    relations: ['user'],
  })

  if (!credential || credential.password !== password) {
    throw new Error('Credenciales inválidas')
  }

  const user = await userRepository.findOne({
    where: { id: credential.user.id },
  })

  if (!user) {
    throw new Error('Usuario no encontrado')
  }

  return {
    login: true,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      birthdate: user.birthdate,
      nDni: user.dni,
    },
  }
}
