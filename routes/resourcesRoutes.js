import express from "express";

import { getAll } from "../controllers/getAllController.js";
import { getByTopic } from "../controllers/getByTopicController.js";
import { createNewResource } from "../controllers/createResourceController.js";

export const resourcesRoutes = express.Router();

resourcesRoutes.get("/", getAll);

resourcesRoutes.get("/:topic", getByTopic);

resourcesRoutes.post("/", createNewResource);
