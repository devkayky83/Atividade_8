import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Jogador = sequelize.define('Jogador', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER    
});

export default Jogador;