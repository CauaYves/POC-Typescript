import { Router } from 'express';
import { getPeople } from '../controllers/people.controller';

const people = Router()

people.get("/people", getPeople)

export {people}