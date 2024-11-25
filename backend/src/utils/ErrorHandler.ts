import { Response } from "express"

export function handleError(err: unknown, response: Response){
    if (err){
        response.status(500).json({
            error: err.toString()
        })
    }
}