import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsToMany } from 'sequelize-typescript';
import { EvaluacionPregunta } from './EvaluacionPregunta';
import { Respuesta } from './Respuesta';
import { Evaluacion } from './Evaluacion';

@Table({ tableName: 'Pregunta' })
export class Pregunta extends Model {

  @Column(DataType.STRING)
  Texto!: string;

  @Column(DataType.STRING)
  TipoPregunta!: string; 

  @Column(DataType.STRING)
  RespuestaCorrecta!: string;

  @Column(DataType.CHAR)
  Estado!: string;

  @Column(DataType.DATE)
  UltimaFechMod!: Date;

  @Column(DataType.STRING)
  UltimoUserMod!: string;

  @BelongsToMany(() => Evaluacion, () => EvaluacionPregunta)
  Evaluaciones!: Evaluacion[];

  @HasMany(() => Respuesta)
  Respuestas!: Respuesta[];
}
