import {NextFunction, Request, Response} from "express";
import UserController from "./UserController";
import UserFacade from "../application/UserFacade";
import {Container, Inject, Service} from "typedi";

console.log('userController On!')

@Service({id: 'userController'})
class UserControllerImpl implements UserController {
    userFacade: UserFacade;

    constructor(@Inject('userFacade') userFacade: UserFacade) {

        this.userFacade = userFacade;


    }

    public defaultController(req: Request, res: Response, next: NextFunction): Response {
        try {
            return res.status(200).json({ok: true})
        } catch {
            return res.status(404).json({})
        }
    }

}

export {UserControllerImpl};
