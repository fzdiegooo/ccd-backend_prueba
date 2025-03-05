import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Usuario } from "./Usuario";
import { Sala } from "./Sala";

@Table({tableName: "UsuarioSala"})
export class UsuarioSala extends Model {
    @ForeignKey(() => Usuario)
    @Column(DataType.INTEGER)
    Usuario_id!: number;

    @ForeignKey(() => Sala)
    @Column(DataType.INTEGER)
    Sala_id!: number;
}