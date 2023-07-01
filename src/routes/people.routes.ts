import { Router } from 'express'
import { createPeople, deletePeople, getPeople } from '../controllers/people.controller'
import { validateSchema } from '../middlewares/validate'
import { peopleSchema } from '../schemas/peopleSchema'

const people = Router()

people.get("/people", getPeople)
people.post("/people", validateSchema(peopleSchema), createPeople)
people.delete("/people/:id", deletePeople)

export {people}