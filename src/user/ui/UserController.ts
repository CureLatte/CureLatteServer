import {NextFunction, Request, Response} from "express";

export default interface UserController {
    defaultController(req: Request, res: Response, next: NextFunction):Response;

}