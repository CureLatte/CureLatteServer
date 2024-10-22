import {Router} from "express";

import UserRouter from "../../user/ui/UserRouter"

const router = Router()

router.use(UserRouter)


export default router