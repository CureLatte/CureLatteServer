import express, {json, urlencoded, Request, Response, NextFunction, ErrorRequestHandler} from "express";
import morgan from 'morgan'

export default async function  createApp(){
    const app = express()

    app.use(json())
    app.use(urlencoded({extended: false}))
    app.use(morgan('combined'))



    app.get('/',async  (req,res,next)=> {
        return res.status(200).json({
            ok: true,
            data: 'Welcome Home!'
        })
    })

    app.use(async (req: Request, res: Response, next: NextFunction) => {
        // router Error Handler
        return next(new Error('Router Does NOT Exist'))
    })

    app.use(async (err: any, req: Request, res: Response, next: NextFunction) => {
        // Error Handler
        return res.status(500).json({
            message: err.message
        })
    })



    return app
}

