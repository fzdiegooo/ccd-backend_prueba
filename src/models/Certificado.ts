import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Usuario } from "./Usuario";
import { Curso } from "./Cursos/Curso";

@Table({
    tableName: "Certificado"
})
export class Certificado extends Model {

    @AllowNull(true)
    @Column(DataType.STRING)
    CodigoCertificado!: string;

    @ForeignKey(() => Usuario)
    @Column(DataType.INTEGER)
    Usuario_id!: number ;

    @ForeignKey(() => Curso)
    @Column(DataType.INTEGER)
    Curso_id!: number;

    @AllowNull(true)
    @Column(DataType.STRING)
    Tipo!: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    RutaImagenDelante!: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    RutaImagenDetras!: string;

    @AllowNull(true)
    @Column(DataType.CHAR(1))
    Estado_id!: string;

    @AllowNull(true)
    @Column(DataType.DATE)
    UltimaFechMod!: Date;

    @AllowNull(true)
    @Column(DataType.STRING)
    UltimoUserMod!: string;

    @BelongsTo(() => Usuario)
    Usuario!: Usuario;

    @BelongsTo(() => Curso)
    Curso!: Curso;
}