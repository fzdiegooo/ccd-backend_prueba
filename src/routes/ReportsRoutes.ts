import { Router } from "express";
import { ReportsController } from "../controllers/ReportsController";

const router = Router();

router.get("/certificados", ReportsController.getCertificados);
router.get("/cuentaszoom", ReportsController.getCuentasZoom);
router.get("/grados", ReportsController.getGrados);
router.get("/niveles", ReportsController.getNiveles);
router.get("/planes", ReportsController.getPlanes);
router.get("/roles", ReportsController.getRoles);
router.get("/salas", ReportsController.getSalas);
router.get("/usuarios", ReportsController.getUsuarios);
router.get("/usuariocursos", ReportsController.getUsuarioCursos);
router.get("/usuariosalas", ReportsController.getUsuarioSalas);
router.get("/cursos", ReportsController.getCursos);
router.get("/modalidades", ReportsController.getModalidades);
router.get("/evaluaciones", ReportsController.getEvaluaciones);
router.get("/evaluacionnotas", ReportsController.getEvaluacionNotas);
router.get("/evaluacionpreguntas", ReportsController.getEvaluacionPreguntas);
router.get("/preguntas", ReportsController.getPreguntas);
router.get("/respuestas", ReportsController.getRespuestas);
router.get("/respuestasalumno", ReportsController.getRespuestasAlumno);
router.get("/tipoevaluaciones", ReportsController.getTipoEvaluaciones);

export default router;
//usuarios

/* get("/cursos")
get("/salas")

//evaluaciones
get(":idusuario") */