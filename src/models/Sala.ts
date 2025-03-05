import { Table, Column, Model, DataType, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Usuario } from './Usuario';
import { UsuarioSala } from './UsuarioSala';
import { Evaluacion } from './Evaluacion/Evaluacion';

@Table({ tableName: 'Sala' })
export class Sala extends Model {

  @Column(DataType.STRING)
  Nombre!: string;

  @Column(DataType.DATE)
  FechaInicio!: Date;

  @Column(DataType.DATE)
  FechaFin!: Date;

  @Column(DataType.STRING)
  Horario!: string;

  @Column(DataType.INTEGER)
  MaximoAlumnos!: number;

  @Column(DataType.STRING)
  Frecuencia!: string;

  @Column(DataType.CHAR)
  Estado!: string;

  @Column(DataType.DATE)
  UltimaFechMod!: Date;

  @Column(DataType.STRING)
  UltimoUserMod!: string;

  @Column(DataType.STRING)
  NumeroReunion!: string;

  @Column(DataType.STRING)
  ClaveReunion!: string;

  @Column(DataType.STRING)
  NumeroWhatsapp!: string;

  @HasMany(() => Evaluacion)
  Evaluaciones!: Evaluacion[];

  @BelongsToMany(() => Usuario, () => UsuarioSala)
  Usuarios!: Usuario[];
}
