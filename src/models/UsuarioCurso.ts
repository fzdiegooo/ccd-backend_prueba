import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Usuario } from "./Usuario";
import { Curso } from "./Cursos/Curso";

@Table({
    tableName: "UsuarioCurso"
})
export class UsuarioCurso extends Model {
    @ForeignKey(() => Usuario)
    @Column(DataType.INTEGER)
    Usuario_id!: number;

    @ForeignKey(() => Curso)
    @Column(DataType.INTEGER)
    Curso_id!: number;
}