import { Router } from 'express'
import { createPeople, deletePeople, editPeople, getPeople } from '../controllers/people.controller'
import { validateSchema } from '../middlewares/validate'
import { peopleSchema, putPeopleSchema } from '../schemas/peopleSchema'

const people = Router()

people.get("/people", getPeople)
people.post("/people", validateSchema(peopleSchema), createPeople)
people.delete("/people/:id", deletePeople)
people.put("/people/edit/:id",validateSchema(putPeopleSchema), editPeople)

export { people }