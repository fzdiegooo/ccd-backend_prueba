import { config } from "dotenv";
config();
import express from "express";
import database from "./config/database";

const app = express();
const port = 3000;

app.listen(port, async () => {
  await database.sync();
  console.log(`Server is running on http://localhost:${port}`);
})