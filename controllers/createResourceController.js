// Import functions from resources
import { resources } from "../helper-functions/resources.js";

//create function to create resource
export async function createNewResource(req, res) {
  const data = req.body;
  // Declare a variable and await helper function
  const newResource = await resources.createResource(data);
  // Create a response object
  res.status(201).json({ status: "success", data: newResource });
}
