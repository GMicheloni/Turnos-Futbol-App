import server from './server'
import { PORT } from './config/envs'
import 'reflect-metadata'
import { AppDataSource } from './config/appDataSource'

AppDataSource.initialize().then((res) => {
  console.log('conexion a la base de datos hecha correctamente')
  server.listen(PORT, function () {
    console.log('server escuchando')
  })
})
