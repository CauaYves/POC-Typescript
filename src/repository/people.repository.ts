import database from "../database"
import { getCurrentDate } from "../utils/getCurrentDate"

export async function getPeopleRepository() {
    const queryString = "SELECT * FROM people"
    const res = await database.query(queryString)
    return res.rows
}

export async function createPeopleRepository(name:string, surname:string, age:number, profession:string){
    const time = getCurrentDate()
    const queryString = `INSERT INTO people ("first_name", "start_date", "surname", "age", "profession") VALUES ($1, $2, $3, $4, $5)`;
    const values = [name, time, surname, age, profession]
    const res = await database.query(queryString, values)
    return res.rows
}
