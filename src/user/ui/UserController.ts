import {NextFunction, Request, Response} from "express";

export const  defaultController = async (req:Request , res: Response, next: NextFunction): Promise<any> => {
    try {

        return res.status(200).json({
            ok: true
        })

    } catch (err){
        next(err)
    }
}