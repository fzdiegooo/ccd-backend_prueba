import { AllowNull, Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "CuentasZoom"
})
export class CuentasZoom extends Model {

    @AllowNull(true)
    @Column(DataType.STRING)
    Nombre!: string | null;

    @AllowNull(true)
    @Column(DataType.STRING)
    Usuario!: string | null;

    @AllowNull(true)
    @Column(DataType.STRING)
    Clave!: string | null;

    @AllowNull(true)
    @Column(DataType.STRING)
    Key!: string | null;

    @AllowNull(true)
    @Column(DataType.STRING)
    SecretKey!: string | null;

    @AllowNull(true)
    @Column(DataType.CHAR)
    Estado_id!: string | null;

    @AllowNull(true)
    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW
    })
    UltimaFechMod!: Date | null;

    @AllowNull(true)
    @Column({
        type: DataType.STRING,
        defaultValue: "Sistemas"
    })
    UltimoUserMod!: string | null;
}
