import 'reflect-metadata';

import {Router} from "express";
import {Container} from "typedi";
import UserController from "./UserController";

const router = Router()

console.log(Container)

let controller = Container.get<UserController>('userController');

router.get('/user' , controller.defaultController)


export default router