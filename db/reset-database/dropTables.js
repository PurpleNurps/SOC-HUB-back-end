import { pool } from "../index.js";
// function to drop tables if they exist
export async function dropTables() {
  try {
    await pool.query(`DROP TABLE IF EXISTS resources`);
    console.log("Tables dropped successfully.");
  } catch (error) {
    console.error(
      "Error dropping tables. Error originated in dropTables.js:",
      error
    );
  }
}
