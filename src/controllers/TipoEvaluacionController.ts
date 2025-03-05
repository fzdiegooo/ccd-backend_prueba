import { Request, Response } from "express";
import { TipoEvaluacion } from "../models/Evaluacion/TipoEvaluacion";

export class TipoEvaluacionController {
  static async getAll(req: Request, res: Response) {
    try {
      const tiposEvaluacion = await TipoEvaluacion.findAll();
      res.json(tiposEvaluacion);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los tipos de evaluación" });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const tipoEvaluacion = await TipoEvaluacion.findByPk(req.params.id);
      if (!tipoEvaluacion) return res.status(404).json({ error: "Tipo de evaluación no encontrado" });
      res.json(tipoEvaluacion);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el tipo de evaluación" });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const tipoEvaluacion = await TipoEvaluacion.create(req.body);
      res.status(201).json(tipoEvaluacion);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el tipo de evaluación" });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const tipoEvaluacion = await TipoEvaluacion.findByPk(req.params.id);
      if (!tipoEvaluacion) return res.status(404).json({ error: "Tipo de evaluación no encontrado" });

      await tipoEvaluacion.update(req.body);
      res.json(tipoEvaluacion);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el tipo de evaluación" });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const tipoEvaluacion = await TipoEvaluacion.findByPk(req.params.id);
      if (!tipoEvaluacion) return res.status(404).json({ error: "Tipo de evaluación no encontrado" });

      await tipoEvaluacion.destroy();
      res.json({ message: "Tipo de evaluación eliminado" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el tipo de evaluación" });
    }
  }
}