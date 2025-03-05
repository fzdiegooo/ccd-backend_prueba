import { Request, Response } from "express";
import { Respuesta } from "../models/Evaluacion/Respuesta";

export class RespuestaController {
  static async getAll(req: Request, res: Response) {
    try {
      const respuestas = await Respuesta.findAll();
      res.json(respuestas);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las respuestas" });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const respuesta = await Respuesta.findByPk(req.params.id);
      if (!respuesta) return res.status(404).json({ error: "Respuesta no encontrada" });
      res.json(respuesta);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la respuesta" });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const respuesta = await Respuesta.create(req.body);
      res.status(201).json(respuesta);
    } catch (error) {
      res.status(500).json({ error: "Error al crear la respuesta" });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const respuesta = await Respuesta.findByPk(req.params.id);
      if (!respuesta) return res.status(404).json({ error: "Respuesta no encontrada" });

      await respuesta.update(req.body);
      res.json(respuesta);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la respuesta" });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const respuesta = await Respuesta.findByPk(req.params.id);
      if (!respuesta) return res.status(404).json({ error: "Respuesta no encontrada" });

      await respuesta.destroy();
      res.json({ message: "Respuesta eliminada" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la respuesta" });
    }
  }
}