import httpStatus from "http-status"
import {createPeopleRepository, deletePeopleRepository, editPeopleRepository, getPeopleByIdRepository, getPeopleRepository} from "../repository/people.repository"

export async function getPeopleService() {
    const people = await getPeopleRepository()
    return people
}

export async function createPeopleService(name:string, surname:string, age:number, profession:string){
    const res = createPeopleRepository(name, surname, age, profession)
    return res
}
export async function deletePeopleService(id: number){
    const res = await deletePeopleRepository(id)
    if(res != 0){
        return {
            response: "registro deletado com sucesso",
            code: httpStatus.OK
        }
    }
    return {
        response: "Nenhum registro encontrado",
        code: httpStatus.NOT_FOUND
    }
}

export async function editPeopleService(id: number, profession: string){
    const result = await getPeopleByIdRepository(id)

    if(result.rowCount > 0) {
        const peopleEdited = await editPeopleRepository(id, profession)
        return peopleEdited
    }

    }