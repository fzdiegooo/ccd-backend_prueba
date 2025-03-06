import { createServer } from "http";
import { config } from "dotenv";
config();
import app from "./app";
import express from "express";
import database from "./config/database";

async function main(): Promise<void> {
  try {
      //sincronizacion con la base de datos
    await database.sync();
      // Inicialización del servidor
    const httpServer = createServer(app);
      //escucha del servidor en puerto 8000
    httpServer.listen(8000, '0.0.0.0', () => {
      console.log(`Server is running on http://localhost:8000`);
    });
      
  } catch (error) {
    console.error("Error durante la ejecucion:", error);
    process.exit(1);
  }
}
main();
  