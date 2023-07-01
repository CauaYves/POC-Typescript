import { Router } from 'express'
import { createPeople, getPeople } from '../controllers/people.controller'
import { validateSchema } from '../middlewares/validate'
import { peopleSchema } from '../schemas/peopleSchema'

const people = Router()

people.get("/people", getPeople)
people.post("/people", validateSchema(peopleSchema), createPeople)

export {people}