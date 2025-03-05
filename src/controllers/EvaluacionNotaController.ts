import { Request, Response } from "express";
import { EvaluacionNota } from "../models/Evaluacion/EvaluacionNota";

export class EvaluacionNotaController {
  static async getAll(req: Request, res: Response) {
    try {
      const notas = await EvaluacionNota.findAll();
      res.json(notas);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las notas de evaluación" });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const nota = await EvaluacionNota.findByPk(req.params.id);
      if (!nota)
        return res.status(404).json({ error: "Nota de evaluación no encontrada" });
      res.json(nota);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la nota de evaluación" });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const nota = await EvaluacionNota.create(req.body);
      res.status(201).json(nota);
    } catch (error) {
      res.status(500).json({ error: "Error al crear la nota de evaluación" });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const nota = await EvaluacionNota.findByPk(req.params.id);
      if (!nota)
        return res.status(404).json({ error: "Nota de evaluación no encontrada" });

      await nota.update(req.body);
      res.json(nota);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la nota de evaluación" });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const nota = await EvaluacionNota.findByPk(req.params.id);
      if (!nota)
        return res.status(404).json({ error: "Nota de evaluación no encontrada" });

      await nota.destroy();
      res.json({ message: "Nota de evaluación eliminada" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la nota de evaluación" });
    }
  }
}