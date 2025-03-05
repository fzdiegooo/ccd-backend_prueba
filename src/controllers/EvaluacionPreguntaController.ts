import { Request, Response } from "express";
import { EvaluacionPregunta } from "../models/Evaluacion/EvaluacionPregunta";

export class EvaluacionPreguntaController {
  static async getAll(req: Request, res: Response) {
    try {
      const evaluacionPreguntas = await EvaluacionPregunta.findAll();
      res.json(evaluacionPreguntas);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las preguntas de evaluación" });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const evaluacionPregunta = await EvaluacionPregunta.findByPk(req.params.id);
      if (!evaluacionPregunta)
        return res.status(404).json({ error: "Pregunta de evaluación no encontrada" });
      res.json(evaluacionPregunta);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la pregunta de evaluación" });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const evaluacionPregunta = await EvaluacionPregunta.create(req.body);
      res.status(201).json(evaluacionPregunta);
    } catch (error) {
      res.status(500).json({ error: "Error al crear la pregunta de evaluación" });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const evaluacionPregunta = await EvaluacionPregunta.findByPk(req.params.id);
      if (!evaluacionPregunta)
        return res.status(404).json({ error: "Pregunta de evaluación no encontrada" });

      await evaluacionPregunta.update(req.body);
      res.json(evaluacionPregunta);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la pregunta de evaluación" });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const evaluacionPregunta = await EvaluacionPregunta.findByPk(req.params.id);
      if (!evaluacionPregunta)
        return res.status(404).json({ error: "Pregunta de evaluación no encontrada" });

      await evaluacionPregunta.destroy();
      res.json({ message: "Pregunta de evaluación eliminada" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la pregunta de evaluación" });
    }
  }
}