import Joi, { number } from "joi"

interface people {
    name: string,
    surname: string,
    age: number,
    profession: string
}

export const peopleSchema = Joi.object<people>({
    name: Joi.string().required(),
    surname:  Joi.string().required(),
    age: Joi.number().required(),
    profession: Joi.string().required()
})

export const putPeopleSchema = Joi.object({
    profession: Joi.string().required()
})