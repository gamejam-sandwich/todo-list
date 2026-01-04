import express from "express";
import cors from "cors";
import pool from "./database.js";

const internalError = {
  error: "internal server error"
}
const app = express();
const PORT = 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/task-list", async (req, res) => {
  try {
    const { rows } = await pool.query(`SELECT * FROM "task-list"`);
    console.log(rows);
    res.json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).json(internalError);
  }
});

app.post("/task-list", async (req, res) => {
  try {
    const { task, priority, category } = req.body;
    const { rows } = await pool.query(
      `
        INSERT INTO "task-list" (task, priority, category)
        VALUES ($1, $2, $3)
        RETURNING id, task, priority, category`,
      [task, priority, category]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json(internalError);
  }
});

app.delete("/task-list/:id", async (req, res) => {
  try {
    await pool.query(`DELETE FROM "task-list" WHERE id = $1`, [req.params.id]);
    res.status(204).send();
  } catch (err) {
    console.log(err);
    res.status(500).json(internalError);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
