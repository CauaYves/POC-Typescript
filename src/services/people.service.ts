import {getPeopleReppository} from "../repository/people.repository"

export async function getPeopleService() {
    const people = await getPeopleReppository()
    return people
}