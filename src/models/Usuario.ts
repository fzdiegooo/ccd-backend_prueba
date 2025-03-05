import { Table, Column, Model, DataType, BelongsToMany, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Curso } from './Cursos/Curso';
import { Sala } from './Sala';
import { UsuarioCurso } from './UsuarioCurso';
import { UsuarioSala } from './UsuarioSala';
import { Grado } from './Grado';
import { Roles } from './Roles';
import { Plan } from './Plan';
import { Nivel } from './Nivel';

@Table({ tableName: 'Usuario' })
export class Usuario extends Model {

  @Column(DataType.STRING)
  Usuario!: string;

  @Column(DataType.STRING)
  Clave!: string;

  @Column(DataType.DATE)
  FcIngreso!: Date;

  @Column(DataType.DATE)
  FcBaja!: Date;

  @Column(DataType.STRING)
  RutaImagenPerfil!: string;

  @Column(DataType.BOOLEAN)
  Online!: boolean;

  @Column(DataType.INTEGER)
  Estado_id!: number;

  @Column(DataType.DATE)
  FechaExpiracion!: Date;

  @ForeignKey(() => Roles)
  @Column(DataType.INTEGER)
  Rol_id!: number;

  @ForeignKey(() => Grado)
  @Column(DataType.INTEGER)
  Grado_id!: number;

  @ForeignKey(() => Plan)
  @Column(DataType.INTEGER)
  Plan_id!: number;

  @ForeignKey(() => Nivel)
  @Column(DataType.INTEGER)
  Nivel_id!: number;

  @BelongsTo(() => Roles)
  Rol!: Roles;

  @BelongsTo(() => Grado)
  Grado!: Grado;

  @BelongsTo(() => Plan)
  Plan!: Plan;

  @BelongsTo(() => Nivel)
  Nivel!: Nivel;

  @BelongsToMany(() => Curso, ()=> UsuarioCurso) 
  Cursos!: Curso[];

  @BelongsToMany(() => Sala, () => UsuarioSala ) 
  Salas!: Sala[];



}