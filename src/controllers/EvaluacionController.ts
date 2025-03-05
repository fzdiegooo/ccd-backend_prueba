import { Request, Response } from "express";
import { Evaluacion } from "../models/Evaluacion/Evaluacion";

export class EvaluacionController {
  static async getAll(req: Request, res: Response) {
    try {
      const evaluaciones = await Evaluacion.findAll();
      res.json(evaluaciones);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener evaluaciones" });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const evaluacion = await Evaluacion.findByPk(req.params.id);
      if (!evaluacion)
        return res.status(404).json({ error: "Evaluación no encontrada" });
      res.json(evaluacion);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la evaluación" });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const evaluacion = await Evaluacion.create(req.body);
      res.status(201).json(evaluacion);
    } catch (error) {
      res.status(500).json({ error: "Error al crear la evaluación" });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const evaluacion = await Evaluacion.findByPk(req.params.id);
      if (!evaluacion)
        return res.status(404).json({ error: "Evaluación no encontrada" });

      await evaluacion.update(req.body);
      res.json(evaluacion);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la evaluación" });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const evaluacion = await Evaluacion.findByPk(req.params.id);
      if (!evaluacion)
        return res.status(404).json({ error: "Evaluación no encontrada" });

      await evaluacion.destroy();
      res.json({ message: "Evaluación eliminada" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la evaluación" });
    }
  }
}