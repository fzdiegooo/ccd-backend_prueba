import { Request, Response } from "express";
import { Roles } from "../models/Roles";

export class RolesController {
    static async getAll(req: Request, res: Response) {
        try {
            const roles = await Roles.findAll();
            res.json(roles);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener los roles" });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const rol = await Roles.findByPk(id);
            if (!rol) return res.status(404).json({ error: "Rol no encontrado" });
            res.json(rol);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener el rol" });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const nuevoRol = await Roles.create(req.body);
            res.status(201).json(nuevoRol);
        } catch (error) {
            res.status(500).json({ error: "Error al crear el rol" });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const rol = await Roles.findByPk(id);
            if (!rol) return res.status(404).json({ error: "Rol no encontrado" });

            await rol.update(req.body);
            res.json(rol);
        } catch (error) {
            res.status(500).json({ error: "Error al actualizar el rol" });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const rol = await Roles.findByPk(id);
            if (!rol) return res.status(404).json({ error: "Rol no encontrado" });

            await rol.destroy();
            res.json({ message: "Rol eliminado correctamente" });
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar el rol" });
        }
    }
}
