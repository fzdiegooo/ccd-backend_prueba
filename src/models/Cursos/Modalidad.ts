import { AllowNull, Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "Modalidad" 
})
export class Modalidad extends Model {


    @AllowNull(false)
    @Column(DataType.STRING)
    Nombre!: string ;

    @AllowNull(false)
    @Column(DataType.STRING)
    Descripcion!: string;

}