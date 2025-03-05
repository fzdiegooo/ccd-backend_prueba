import { Table, Column, Model, DataType, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Curso } from '../Cursos/Curso';
import { Pregunta } from './Pregunta';
import { EvaluacionPregunta } from './EvaluacionPregunta';
import { Sala } from '../Sala';
import { TipoEvaluacion } from './TipoEvaluacion';


@Table({ tableName: 'Evaluacion' })
export class Evaluacion extends Model {
  @Column(DataType.STRING)
  evaluacion!: string;

  @Column(DataType.STRING)
  descripcion!: string;

  @ForeignKey(() => TipoEvaluacion)
  @Column(DataType.INTEGER)
  tipoEvaluacion_id!: number;

  @BelongsTo(() => TipoEvaluacion)
  tipoEvaluacion!: TipoEvaluacion;

  @Column(DataType.INTEGER)
  duracion!: number;

  @Column(DataType.INTEGER)
  intentos!: number;

  @Column(DataType.DATE)
  fechaInicio!: Date;

  @Column(DataType.DATE)
  fechaFin!: Date;

  @ForeignKey(() => Curso)
  @Column(DataType.INTEGER)
  curso_id!: number;

  @BelongsTo(() => Curso)
  curso!: Curso;

  // Sala solo se usa si el tipo de evaluación es "EVALUACION_VIVO"
  @ForeignKey(() => Sala)
  @Column(DataType.INTEGER)
  sala_id!: number | null; // Puede ser null

  @BelongsTo(() => Sala)
  sala!: Sala | null;

  @Column(DataType.CHAR)
  estado_id!: string;

  @BelongsToMany(() => Pregunta, () => EvaluacionPregunta)
  evaluacionPreguntas!: Pregunta[];
}
