import { AllowNull, Column, DataType,  Model, Table } from "sequelize-typescript";

@Table({
    tableName: "Grado"
})
export class Grado extends Model {

    @AllowNull(true)
    @Column(DataType.STRING)
    Nombre!: string ;

}
