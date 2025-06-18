import { Router } from 'express'

import auth from '../middlewares/autenticacion'
import {
  createUserController,
  getAllUsersController,
  getUserByIdController,
  loginUserController,
} from '../controllers/usersController'
import {
  cancelTurnController,
  createTurnController,
  getAllTurnsController,
  getTurnByIdController,
} from '../controllers/turnsController'

const router: Router = Router()

router.get('/users', getAllUsersController)
router.get('/users/:id', getUserByIdController)
router.post('/register', createUserController)
router.post('/login', loginUserController)
router.get('/turns/:id', getTurnByIdController)
router.post('/schedule', createTurnController)
router.put('/cancel/:id', cancelTurnController)
router.get('/turns', getAllTurnsController)

export default router
