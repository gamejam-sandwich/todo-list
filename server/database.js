import pg from "pg";
import "dotenv/config";

const { Pool } = pg;

// Export new instance of Pool
const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: "todolist",
    ssl: false
});

export default pool;