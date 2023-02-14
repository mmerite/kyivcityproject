import postgres from "postgres";
const dbConnection = process.env.POSTGRES_CONNECTION_STRING;
    const sql = postgres(dbConnection); 
    // it can be replaced with const sql = postgres(process.env.POSTGRES_CONNECTION_STRING)

    export default sql;