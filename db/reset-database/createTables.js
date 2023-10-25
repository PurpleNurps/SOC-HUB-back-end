import { pool } from "../index.js";

export async function createTables() {
  try {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS resources (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            topic TEXT NOT NULL,
            name TEXT NOT NULL,
            link TEXT NOT NULL
        );
    `);
    console.log("resources table has been created successfully");
  } catch (error) {
    console.error(
      "Error creating resourses, Error originated in createTables.js",
      error
    );
  }
}
