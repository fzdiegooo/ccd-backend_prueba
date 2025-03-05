import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Pregunta } from "./Pregunta";
import { EvaluacionNota } from "./EvaluacionNota";

@Table({ tableName: 'RespuestaAlumno' })
export class RespuestaAlumno extends Model {
  @ForeignKey(() => EvaluacionNota)
  @Column(DataType.INTEGER)
  EvaluacionNota_id!: number;

  @BelongsTo(() => EvaluacionNota)
  EvaluacionNota!: EvaluacionNota;

  @ForeignKey(() => Pregunta)
  @Column(DataType.INTEGER)
  Pregunta_id!: number;

  @BelongsTo(() => Pregunta)
  Pregunta!: Pregunta;

  @Column(DataType.STRING)
  RespuestaMarcada!: string;

  @Column(DataType.BOOLEAN)
  EsCorrecta!: boolean;
}

