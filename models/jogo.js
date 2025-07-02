import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Jogo = sequelize.define('Jogo', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    year: DataTypes.INTEGER,
    platform: DataTypes.STRING
});

export default Jogo;