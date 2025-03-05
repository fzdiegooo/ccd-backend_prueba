import { AllowNull, Column, Model, DataType, Table } from "sequelize-typescript";

@Table({
    tableName: "Nivel"
})

export class Nivel extends Model {

    @AllowNull(false)
    @Column(DataType.STRING)
    Nombre!: string ;

}