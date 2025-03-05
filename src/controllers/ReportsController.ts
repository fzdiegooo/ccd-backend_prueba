import { Request, Response } from "express";
import { Certificado } from "../models/Certificado";
import { CuentasZoom } from "../models/CuentasZoom";
import { Grado } from "../models/Grado";
import { Nivel } from "../models/Nivel";
import { Plan } from "../models/Plan";
import { Roles } from "../models/Roles";
import { Sala } from "../models/Sala";
import { Usuario } from "../models/Usuario";
import { UsuarioCurso } from "../models/UsuarioCurso";
import { UsuarioSala } from "../models/UsuarioSala";
import { Curso } from "../models/Cursos/Curso";
import { Modalidad } from "../models/Cursos/Modalidad";
import { Evaluacion } from "../models/Evaluacion/Evaluacion";
import { EvaluacionNota } from "../models/Evaluacion/EvaluacionNota";
import { EvaluacionPregunta } from "../models/Evaluacion/EvaluacionPregunta";
import { Pregunta } from "../models/Evaluacion/Pregunta";
import { Respuesta } from "../models/Evaluacion/Respuesta";
import { RespuestaAlumno } from "../models/Evaluacion/RespuestaAlumno";
import { TipoEvaluacion } from "../models/Evaluacion/TipoEvaluacion";

export class ReportsController {
    static async getCertificados(req: Request, res: Response) {
        try {
            const data = await Certificado.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener certificados" });
        }
    }

    static async getCuentasZoom(req: Request, res: Response) {
        try {
            const data = await CuentasZoom.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener cuentas Zoom" });
        }
    }

    static async getGrados(req: Request, res: Response) {
        try {
            const data = await Grado.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener grados" });
        }
    }

    static async getNiveles(req: Request, res: Response) {
        try {
            const data = await Nivel.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener niveles" });
        }
    }

    static async getPlanes(req: Request, res: Response) {
        try {
            const data = await Plan.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener planes" });
        }
    }

    static async getRoles(req: Request, res: Response) {
        try {
            const data = await Roles.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener roles" });
        }
    }

    static async getSalas(req: Request, res: Response) {
        try {
            const data = await Sala.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener salas" });
        }
    }

    static async getUsuarios(req: Request, res: Response) {
        try {
            const data = await Usuario.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener usuarios" });
        }
    }

    static async getUsuarioCursos(req: Request, res: Response) {
        try {
            const data = await UsuarioCurso.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener usuario-cursos" });
        }
    }

    static async getUsuarioSalas(req: Request, res: Response) {
        try {
            const data = await UsuarioSala.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener usuario-salas" });
        }
    }

    static async getCursos(req: Request, res: Response) {
        try {
            const data = await Curso.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener cursos" });
        }
    }

    static async getModalidades(req: Request, res: Response) {
        try {
            const data = await Modalidad.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener modalidades" });
        }
    }

    static async getEvaluaciones(req: Request, res: Response) {
        try {
            const data = await Evaluacion.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener evaluaciones" });
        }
    }

    static async getEvaluacionNotas(req: Request, res: Response) {
        try {
            const data = await EvaluacionNota.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener evaluaciones notas" });
        }
    }

    static async getEvaluacionPreguntas(req: Request, res: Response) {
        try {
            const data = await EvaluacionPregunta.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener evaluaciones preguntas" });
        }
    }

    static async getPreguntas(req: Request, res: Response) {
        try {
            const data = await Pregunta.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener preguntas" });
        }
    }

    static async getRespuestas(req: Request, res: Response) {
        try {
            const data = await Respuesta.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener respuestas" });
        }
    }

    static async getRespuestasAlumno(req: Request, res: Response) {
        try {
            const data = await RespuestaAlumno.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener respuestas del alumno" });
        }
    }

    static async getTipoEvaluaciones(req: Request, res: Response) {
        try {
            const data = await TipoEvaluacion.findAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener tipos de evaluación" });
        }
    }
}