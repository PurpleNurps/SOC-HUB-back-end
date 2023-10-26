// Import functions from resources
import { createResource } from "../helper-functions/createResource.js";

//create function to create resource
export async function createNewResource(req, res) {
  const data = req.body;
  // Declare a variable and await helper function
  const resource = await createResource(data);
  // Create a response object
  res.status(201).json({ status: "success", data: resource });
}
