import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { getPeopleService } from '../services/people.service';

export async function getPeople(req:Request, res:Response) {
    try{
        const people = await getPeopleService()
        console.log("controler")
        res.send(people)
    }catch(error){
        return res.status(httpStatus.NOT_FOUND).send({});
    }
}