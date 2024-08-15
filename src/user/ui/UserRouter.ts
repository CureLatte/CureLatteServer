import {Router} from "express";
import { defaultController} from './UserController'

const router = Router()

router.get('/', defaultController)

export default router