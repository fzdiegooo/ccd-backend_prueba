import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Pregunta } from './Pregunta';

@Table({ tableName: 'Respuesta' })
export class Respuesta extends Model {

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  IdRespuesta!: number;

  @Column(DataType.STRING)
  Texto!: string;

  @Column(DataType.INTEGER)
  Orden!: number;

  @ForeignKey(() => Pregunta)
  @Column(DataType.INTEGER)
  Pregunta_id!: number;

  @Column(DataType.CHAR)
  Estado!: string;

  @Column(DataType.DATE)
  UltimaFechMod!: Date;

  @Column(DataType.STRING)
  UltimoUserMod!: string;

  @BelongsTo(() => Pregunta)
  Pregunta!: Pregunta;
}
