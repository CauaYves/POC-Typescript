import {createPeopleRepository, getPeopleRepository} from "../repository/people.repository"

export async function getPeopleService() {
    const people = await getPeopleRepository()
    return people
}

export async function createPeopleService(name:string){
    const res = createPeopleRepository(name)
    return res
}