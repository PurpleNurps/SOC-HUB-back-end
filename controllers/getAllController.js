// Import functions from resources
import { getAllResources } from "../helper-functions/resources.js"
// Create function to get all resources
export async function getAll(req, res) {
    // Declare a variable and await hewlper function
    const resources = await getAllResources();
    // Create a response object
    res.status(200).json({ status: "success", data: resources });
}