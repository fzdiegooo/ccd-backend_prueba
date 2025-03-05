import { Table, Column, Model, DataType, BelongsTo, BelongsToMany, ForeignKey } from 'sequelize-typescript';
import { Modalidad } from './Modalidad';
import { Usuario } from '../Usuario';
import { Grado } from '../Grado';
import { Nivel } from '../Nivel';
import { UsuarioCurso } from '../UsuarioCurso';


@Table({ tableName: 'Curso' })
export class Curso extends Model {

  @Column(DataType.STRING)
  CodigoCurso!: string;

  @Column(DataType.STRING)
  Nombre!: string;

  @Column(DataType.CHAR)
  Estado_id!: string;

  @ForeignKey(() => Modalidad)
  @Column(DataType.INTEGER)
  Modalidad_id!: number;

  @ForeignKey(() => Grado)
  @Column(DataType.INTEGER)
  Grado_id!: number;

  @ForeignKey(() => Nivel)
  @Column(DataType.INTEGER)
  Nivel_id!: number;

  @BelongsTo(() => Modalidad, { foreignKey: 'Modalidad_id' })
  Modalidad!: Modalidad;

  @BelongsTo(() => Grado, { foreignKey: 'Grado_id' })
  Grado!: Grado;  

  @BelongsTo(() => Nivel, { foreignKey: 'Nivel_id' })
  Nivel!: Nivel;

  @BelongsToMany(() => Usuario, ()=> UsuarioCurso) // Si existe UsuarioCurso
  Usuarios!: Usuario[];
}
