import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Evaluacion } from './Evaluacion';
import { Curso } from '../Cursos/Curso';
import { Usuario } from '../Usuario';

@Table({ tableName: 'EvaluacionNota' })
export class EvaluacionNota extends Model {

  @ForeignKey(() => Usuario)
  @Column(DataType.INTEGER)
  Usuario_id!: number;

  @Column(DataType.DECIMAL)
  Nota!: number;

  @Column(DataType.INTEGER)
  Intento!: number;

  @Column(DataType.DATE)
  FechaInicio!: Date;

  @Column(DataType.DATE)
  FechaFin!: Date;

  @ForeignKey(() => Evaluacion)
  @Column(DataType.INTEGER)
  Evaluacion_id!: number;

  @Column(DataType.INTEGER)
  Duracion!: number;

  @Column(DataType.CHAR)
  Estado!: string;

  @Column(DataType.DATE)
  UltimaFechMod!: Date;

  @Column(DataType.STRING)
  UltimoUserMod!: string;

  @BelongsTo(() => Usuario)
  Usuario!: Usuario;

  @BelongsTo(() => Evaluacion)
  Evaluacion!: Evaluacion;

}
