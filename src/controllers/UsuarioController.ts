import { Request, Response } from "express";
import { Usuario } from "../models/Usuario";

export class UsuarioController {
    static async getAll(req: Request, res: Response) {
        try {
            const usuarios = await Usuario.findAll();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener los usuarios" });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const usuario = await Usuario.findByPk(id);
            if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
            res.json(usuario);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener el usuario" });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const nuevoUsuario = await Usuario.create(req.body);
            res.status(201).json(nuevoUsuario);
        } catch (error) {
            res.status(500).json({ error: "Error al crear el usuario" });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const usuario = await Usuario.findByPk(id);
            if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

            await usuario.update(req.body);
            res.json(usuario);
        } catch (error) {
            res.status(500).json({ error: "Error al actualizar el usuario" });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const usuario = await Usuario.findByPk(id);
            if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

            await usuario.destroy();
            res.json({ message: "Usuario eliminado correctamente" });
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar el usuario" });
        }
    }
}