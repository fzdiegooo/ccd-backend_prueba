import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Evaluacion } from "./Evaluacion";

@Table({ tableName: 'TipoEvaluacion' })
export class TipoEvaluacion extends Model {
  
  @Column(DataType.STRING)
  Nombre!: string;

  @Column(DataType.STRING)
  Descripcion!: string;

  @HasMany(() => Evaluacion)
  Evaluaciones!: Evaluacion[];
}
