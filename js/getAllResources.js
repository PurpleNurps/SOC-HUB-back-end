// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../index.js";

// get all resources function
export async function getAllResources() {
  //Query db and return all resources
  try {
    const queryResources = "SELECT * FROM resources";

    // pool object to send the query to the database
    const result = await pool.query(queryResources);

    // 'rows' property will contain the result of the retreived resources record
    return result.rows;
    // catch all errors
  } catch (error) {
    console.error(
      `Error fetching all resources. Error originated in getAllResources.js:`,
      error.message
    );
    throw error;
  }
}
