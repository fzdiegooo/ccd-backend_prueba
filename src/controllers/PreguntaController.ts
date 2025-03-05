import { Request, Response } from "express";
import { Pregunta } from "../models/Evaluacion/Pregunta";

export class PreguntaController {
  static async getAll(req: Request, res: Response) {
    try {
      const preguntas = await Pregunta.findAll();
      res.json(preguntas);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las preguntas" });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const pregunta = await Pregunta.findByPk(req.params.id);
      if (!pregunta) return res.status(404).json({ error: "Pregunta no encontrada" });
      res.json(pregunta);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la pregunta" });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const pregunta = await Pregunta.create(req.body);
      res.status(201).json(pregunta);
    } catch (error) {
      res.status(500).json({ error: "Error al crear la pregunta" });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const pregunta = await Pregunta.findByPk(req.params.id);
      if (!pregunta) return res.status(404).json({ error: "Pregunta no encontrada" });

      await pregunta.update(req.body);
      res.json(pregunta);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la pregunta" });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const pregunta = await Pregunta.findByPk(req.params.id);
      if (!pregunta) return res.status(404).json({ error: "Pregunta no encontrada" });

      await pregunta.destroy();
      res.json({ message: "Pregunta eliminada" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la pregunta" });
    }
  }
}