import { Curso } from "./Cursos/Curso";
import { Modalidad } from "./Cursos/Modalidad";
import { Evaluacion } from "./Evaluacion/Evaluacion";
import { EvaluacionNota } from "./Evaluacion/EvaluacionNota";
import { EvaluacionPregunta } from "./Evaluacion/EvaluacionPregunta";
import { Pregunta } from "./Evaluacion/Pregunta";
import { Respuesta } from "./Evaluacion/Respuesta";
import { Certificado } from "./Certificado";
import { CuentasZoom } from "./CuentasZoom";
import { Grado } from "./Grado";
import { Nivel } from "./Nivel";
import { Plan } from "./Plan";
import { Roles } from "./Roles";
import { Sala } from "./Sala";
import { Usuario } from "./Usuario";
import { UsuarioCurso } from "./UsuarioCurso";
import { UsuarioSala } from "./UsuarioSala";
import { TipoEvaluacion } from "./Evaluacion/TipoEvaluacion";
import { RespuestaAlumno } from "./Evaluacion/RespuestaAlumno";



export const models = [
    Curso,
    Modalidad,
    UsuarioCurso,
    RespuestaAlumno,
    UsuarioSala,
    Evaluacion,
    EvaluacionNota,
    TipoEvaluacion,
    EvaluacionPregunta,
    Pregunta,
    Respuesta,
    Certificado,
    CuentasZoom,
    Grado,
    Nivel,
    Plan,
    Roles,
    Sala,
    Usuario
];