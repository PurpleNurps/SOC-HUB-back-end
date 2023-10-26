// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../index.js";

// get resources by topic
export async function getResourcesByTopic(topic) {
  // query the db to return the specific topics
  try {
    // define SQL query
    const queryResources = "SELECT * FROM resources WHERE topic = $1";
    // use pool object to send query to db, preventing SQL injection
    const result = await pool.query(queryResources, [topic]);
    // rows property should contain queried data
    return result.rows;
  } catch (error) {
    console.error(
      "Error retrieving resources by topic. Error originated in getResourceByTopic.js",
      error
    );
  }
  throw error;
}
