import { Request, Response } from "express";
import { Certificado } from "../models/Certificado";

export class CertificadoController {
    static async getAll(req: Request, res: Response) {
        const certificados = await Certificado.findAll();
        res.json(certificados);
    }

    static async getById(req: Request, res: Response) {
        const certificado = await Certificado.findByPk(req.params.id);
        if (certificado) res.json(certificado);
        else res.status(404).json({ message: "Certificado no encontrado" });
    }

    static async create(req: Request, res: Response) {
        const nuevo = await Certificado.create(req.body);
        res.status(201).json(nuevo);
    }

    static async update(req: Request, res: Response) {
        const certificado = await Certificado.findByPk(req.params.id);
        if (!certificado) return res.status(404).json({ message: "No encontrado" });
        await certificado.update(req.body);
        res.json(certificado);
    }

    static async delete(req: Request, res: Response) {
        const certificado = await Certificado.findByPk(req.params.id);
        if (!certificado) return res.status(404).json({ message: "No encontrado" });
        await certificado.destroy();
        res.json({ message: "Eliminado correctamente" });
    }
}
