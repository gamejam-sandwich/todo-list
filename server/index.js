import express from "express";
import cors from "cors";
import pool from "./database.js";

const app = express();
const PORT = 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/task-list", async (req, res) => {
  const { rows } = await pool.query(`SELECT * FROM "task-list"`);
  console.log(rows);
  res.json(rows);
});

app.post("/task-list", async (req, res) => {
  try {
    const { task, priority } = req.body;
    const { rows } = await pool.query(
      `
        INSERT INTO "task-list" (task, priority)
        VALUES ($1, $2)
        RETURNING id, task, priority`,
      [task, priority]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/task-list/:id", async (req, res) => {
  await pool.query(`DELETE FROM "task-list" WHERE id = $1`, [req.params.id]);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
