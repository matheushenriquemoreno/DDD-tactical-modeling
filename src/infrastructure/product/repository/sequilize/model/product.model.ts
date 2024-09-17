
import { DECIMAL } from "sequelize";
import {Column, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table({
    tableName: "products",
    timestamps: false,
})
export default class ProductModel extends Model {

    @PrimaryKey
    @Column
    declare id: string;

    @Column({ allowNull: false})
    declare name: string

    @Column({ allowNull: false, type: DECIMAL(18,2)})
    declare price:number
}