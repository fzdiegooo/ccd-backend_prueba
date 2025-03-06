import { Request, Response } from "express";
import { Evaluacion } from "../models/Evaluacion/Evaluacion";

export class EvaluacionController {
  static async getAll(req: Request, res: Response) {
    try {
      const evaluaciones = await Evaluacion.findAll();
      res.json(evaluaciones);
    } catch (error: any) {
      res.status(500).json({ error: `Error al obtener evaluaciones: ${error.message}` });
    }
  }
  
  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: "ID inválido" });
      }

      const evaluacion = await Evaluacion.findByPk(id);
      if (!evaluacion) {
        return res.status(404).json({ error: "Evaluación no encontrada" });
      }

      return res.json(evaluacion);
    } catch (error: any) {
      return res.status(500).json({ error: `Error al obtener la evaluación: ${error.message}` });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: "Datos inválidos" });
      }

      const evaluacion = await Evaluacion.create(req.body);
      return res.status(201).json(evaluacion);
    } catch (error: any) {
      return res.status(500).json({ error: `Error al crear la evaluación: ${error.message}` });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: "ID inválido" });
      }

      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: "Datos inválidos" });
      }

      const evaluacion = await Evaluacion.findByPk(id);
      if (!evaluacion) {
        return res.status(404).json({ error: "Evaluación no encontrada" });
      }

      await evaluacion.update(req.body);
      return res.json(evaluacion);
    } catch (error: any) {
      return res.status(500).json({ error: `Error al actualizar la evaluación: ${error.message}` });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: "ID inválido" });
      }

      const evaluacion = await Evaluacion.findByPk(id);
      if (!evaluacion) {
        return res.status(404).json({ error: "Evaluación no encontrada" });
      }

      await evaluacion.destroy();
      return res.json({ message: "Evaluación eliminada" });
    } catch (error: any) {
      return res.status(500).json({ error: `Error al eliminar la evaluación: ${error.message}` });
    }
  }
}
