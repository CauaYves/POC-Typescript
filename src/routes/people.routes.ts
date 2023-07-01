import { Router } from 'express';
import { createPeople, getPeople } from '../controllers/people.controller';

const people = Router()

people.get("/people", getPeople)
people.post("/people", createPeople)

export {people}