import express from "express";
import cors from "cors";
import pool from "./database.js";

const app = express();
const PORT = 3000;
app.use(
    cors({
        origin: "http://localhost:5174",
    })
);

app.use(express.json());

// COMMANDS GO HERE

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})