import { Request, Response } from "express";
import { Modalidad } from "../models/Cursos/Modalidad";

export class ModalidadController {
  static async getAll(req: Request, res: Response) {
    try {
      const modalidades = await Modalidad.findAll();
      res.json(modalidades);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener modalidades" });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const modalidad = await Modalidad.findByPk(req.params.id);
      if (!modalidad)
        return res.status(404).json({ error: "Modalidad no encontrada" });
      res.json(modalidad);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la modalidad" });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const modalidad = await Modalidad.create(req.body);
      res.status(201).json(modalidad);
    } catch (error) {
      res.status(500).json({ error: "Error al crear la modalidad" });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const modalidad = await Modalidad.findByPk(req.params.id);
      if (!modalidad)
        return res.status(404).json({ error: "Modalidad no encontrada" });

      await modalidad.update(req.body);
      res.json(modalidad);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la modalidad" });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const modalidad = await Modalidad.findByPk(req.params.id);
      if (!modalidad)
        return res.status(404).json({ error: "Modalidad no encontrada" });

      await modalidad.destroy();
      res.json({ message: "Modalidad eliminada" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la modalidad" });
    }
  }
}