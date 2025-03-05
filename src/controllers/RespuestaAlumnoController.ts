import { Request, Response } from "express";
import { RespuestaAlumno } from "../models/Evaluacion/RespuestaAlumno";

export class RespuestaAlumnoController {
  static async getAll(req: Request, res: Response) {
    try {
      const respuestasAlumnos = await RespuestaAlumno.findAll();
      res.json(respuestasAlumnos);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las respuestas de los alumnos" });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const respuestaAlumno = await RespuestaAlumno.findByPk(req.params.id);
      if (!respuestaAlumno) return res.status(404).json({ error: "Respuesta de alumno no encontrada" });
      res.json(respuestaAlumno);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la respuesta del alumno" });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const respuestaAlumno = await RespuestaAlumno.create(req.body);
      res.status(201).json(respuestaAlumno);
    } catch (error) {
      res.status(500).json({ error: "Error al crear la respuesta del alumno" });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const respuestaAlumno = await RespuestaAlumno.findByPk(req.params.id);
      if (!respuestaAlumno) return res.status(404).json({ error: "Respuesta de alumno no encontrada" });

      await respuestaAlumno.update(req.body);
      res.json(respuestaAlumno);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la respuesta del alumno" });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const respuestaAlumno = await RespuestaAlumno.findByPk(req.params.id);
      if (!respuestaAlumno) return res.status(404).json({ error: "Respuesta de alumno no encontrada" });

      await respuestaAlumno.destroy();
      res.json({ message: "Respuesta de alumno eliminada" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la respuesta del alumno" });
    }
  }
}