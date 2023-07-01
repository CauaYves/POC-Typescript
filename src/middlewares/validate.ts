import { NextFunction, Response, Request} from "express"
import { Schema } from "joi"

export function validateSchema<T>(schema: Schema<T>) {
    
    return (req:Request, res:Response, next:NextFunction) => {
        const validation = schema.validate(req.body, { abortEarly: false })

        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message)
            
            return res.status(422).send(errors)
        }
        next()
    }
}