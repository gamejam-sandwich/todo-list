import pg from "pg";

const { Pool } = pg;

// Export new instance of Pool
const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "password",
    database: "todolist",
    ssl: false
});

export default pool;