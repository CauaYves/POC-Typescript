import pg from "pg"

const database = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'people',
    password: 'root',
    port: 5432,
  });

export default database