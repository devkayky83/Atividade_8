import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Desenvolvedor = sequelize.define('Desenvolvedor', {
    name: DataTypes.STRING,
    country: DataTypes.STRING    
});

export default Desenvolvedor;