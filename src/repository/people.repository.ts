import database from "../database"
import { getCurrentDate } from "../utils/getCurrentDate"

export async function getPeopleRepository() {
    const queryString = "SELECT * FROM people"
    const res = await database.query(queryString)
    return res.rows
}

export async function createPeopleRepository(name:string){
    const time = getCurrentDate()
    const queryString = "INSERT INTO people (name, startDate) VALUES ($1, $2)";
    const values = [name, time]
    const res = await database.query(queryString, values)
    return res.rows
}
