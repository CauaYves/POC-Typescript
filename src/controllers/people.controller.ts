import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { createPeopleService, getPeopleService } from '../services/people.service';

export async function getPeople(req:Request, res:Response) {
    try{
        const people = await getPeopleService()
        res.send(people)
    }catch(error){
        return res.status(httpStatus.NOT_FOUND).send({});
    }
}

export async function createPeople(req:Request, res:Response) {
    const { name } = req.body
    try{
        const result = await createPeopleService(name)
        res.send("registro criado")
    }catch(error){
        return res.status(httpStatus.BAD_REQUEST).send({error});
    }
}