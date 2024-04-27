import { RUN_SERVER } from "./config.js";
const PORT = process.env.PORT || 3000;
console.log("PORT:", PORT);
RUN_SERVER(PORT);
