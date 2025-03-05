import { Table, Column, Model, DataType, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { EvaluacionNota } from './EvaluacionNota';
import { Pregunta } from './Pregunta';
import { Evaluacion } from './Evaluacion';

@Table({ tableName: 'EvaluacionPregunta' })
export class EvaluacionPregunta extends Model {

  @ForeignKey(() => Pregunta)
  @Column(DataType.INTEGER)
  Pregunta_id!: number;

  @ForeignKey(() => Evaluacion)
  @Column(DataType.INTEGER)
  Evaluacion_id!: number;

  @Column(DataType.INTEGER)
  Marcado!: number

  @ForeignKey(() => EvaluacionNota)
  @Column(DataType.INTEGER)
  EvaluacionNota_id!: number;

  @Column(DataType.CHAR)
  Estado!: string;

  @BelongsTo(() => Pregunta)
  Pregunta!: Pregunta;

  @BelongsTo(() => EvaluacionNota)
  EvaluacionNota!: EvaluacionNota;
}
