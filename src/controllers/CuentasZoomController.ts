import { Request, Response } from "express";
import { CuentasZoom } from "../models/CuentasZoom";

export class CuentasZoomController {
    static async getAll(req: Request, res: Response) {
        try {
            const cuentas = await CuentasZoom.findAll();
            return res.json({ message: "Zoom conectado", data: cuentas });
        } catch (error) {
            return res.status(500).json({ error: "Error al obtener las cuentas de Zoom" });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const cuenta = await CuentasZoom.findByPk(id);
            if (!cuenta) {
                return res.status(404).json({ error: "Cuenta no encontrada" });
            }
            return res.json({ message: "Zoom conectado", data: cuenta });
        } catch (error) {
            return res.status(500).json({ error: "Error al obtener la cuenta de Zoom" });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const nuevaCuenta = await CuentasZoom.create(req.body);
            return res.status(201).json({ message: "Zoom conectado", data: nuevaCuenta });
        } catch (error) {
            return res.status(500).json({ error: "Error al crear la cuenta de Zoom" });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const cuenta = await CuentasZoom.findByPk(id);
            if (!cuenta) {
                return res.status(404).json({ error: "Cuenta no encontrada" });
            }
            await cuenta.update(req.body);
            return res.json({ message: "Cuenta actualizada correctamente", data: cuenta });
        } catch (error) {
            return res.status(500).json({ error: "Error al actualizar la cuenta de Zoom" });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const cuenta = await CuentasZoom.findByPk(id);
            if (!cuenta) {
                return res.status(404).json({ error: "Cuenta no encontrada" });
            }
            await cuenta.destroy();
            return res.json({ message: "Cuenta eliminada correctamente" });
        } catch (error) {
            return res.status(500).json({ error: "Error al eliminar la cuenta de Zoom" });
        }
    }
}
