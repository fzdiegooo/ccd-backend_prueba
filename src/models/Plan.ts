import { AllowNull, Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "Plan"
})
export class Plan extends Model {

    @AllowNull(true)
    @Column(DataType.STRING)
    Nombre!: string | null;

    @AllowNull(true)
    @Column(DataType.STRING)
    Descripcion!: string | null;

    @AllowNull(true)
    @Column(DataType.DOUBLE)
    Precio!: number | null;

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