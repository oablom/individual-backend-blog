import { RUN_SERVER } from "./config.js";
const db_path = process.env.MONGODB_URI || "mongodb://localhost:3000/";
const PORT = process.env.PORT || 3000;
console.log("PORT:", PORT);
RUN_SERVER(PORT, db_path);
