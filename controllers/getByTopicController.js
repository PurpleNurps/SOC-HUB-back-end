import { resources } from "../helper-functions/resources.js";

// Create a function to get the resources for a given topic
export async function getByTopic(req, res) {
  const topic = req.params.topic;
  // Declare a variable with the request topivc using req.params.topic
  const resources = await resources.getResourcesByTopic(topic);
  // Error handling, assume the topic is not found
  if (!topic) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Topic not found" } });
  }
  // Create a response object
  res.status(200).json({ status: "success", data: resources });
}
