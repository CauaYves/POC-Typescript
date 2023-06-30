import database from "../database"

export async function getPeopleReppository() {
    const queryString = "SELECT * FROM people"
    const res = await database.query(queryString)
    console.log("chegou")
    return res.rows
}