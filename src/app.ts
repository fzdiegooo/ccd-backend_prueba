import express, { Application } from "express";
import cors from "cors";
import ReportsRoutes from "./routes/ReportsRoutes";
import CuentasZoomRoutes from "./routes/CuentasZoomRoutes";
import EvaluacionRoutes from "./routes/EvaluacionRoutes";
import EvaluacionNotaRoutes from "./routes/EvaluacionNotaRoutes";
import UsuarioRoutes from "./routes/UsuarioRoutes"
import SalaRoutes from "./routes/SalaRoutes"
import CursoRoutes from "./routes/CursosRoutes"

class App {
    private server: Application;

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.server.use(cors());
        this.server.use(express.json());
    }

    private routes(): void {
        this.server.use("/api/auth", UsuarioRoutes);
        this.server.use("/Evaluacion", EvaluacionRoutes);
        this.server.use("/Evaluacion/Nota", EvaluacionNotaRoutes);
        this.server.use("/Evaluacion/Nota", EvaluacionNotaRoutes);
        this.server.use("/Evaluacion/Nota", EvaluacionNotaRoutes);
        this.server.use("/api/reports", ReportsRoutes);
        this.server.use("/api/zoom", CuentasZoomRoutes);
        this.server.use("/Sala", SalaRoutes)
        this.server.use("/Curso", CursoRoutes)
    }

    public getServer(): Application {
        return this.server;
    }
}

export default new App().getServer();