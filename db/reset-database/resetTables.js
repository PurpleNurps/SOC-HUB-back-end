import { dropTables } from "./dropTables.js";
import { createTables } from "./createTables.js";
import { seedTables } from "./seedTables.js";

await dropTables();
await createTables();
await seedTables();
