// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../index.js";

// Create resource
export async function createResource(resource) {
  try {
    // Define SQL query to INSERT INTO
    const insertResource =
      "INSERT INTO resources (topic, name, link) VALUES ($1, $2, $3) RETURNING *";
    // destructure the resource object
    const { topic, name, link } = resource;
    // Use pool object to send query to database, preventing SQL injection
    const result = await pool.query(insertResource, [topic, name, link]);
    // rows property should contain inserted data
    return result.rows[0];
  } catch (error) {
    console.error(
      `Error creating resource. Error originated in createResource.js`,
      error
    );
    throw error;
  }
}
