import {createPeopleRepository, getPeopleRepository} from "../repository/people.repository"

export async function getPeopleService() {
    const people = await getPeopleRepository()
    return people
}

export async function createPeopleService(name:string, surname:string, age:number, profession:string){
    const res = createPeopleRepository(name, surname, age, profession)
    return res
}