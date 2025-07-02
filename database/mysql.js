import { Sequelize } from "sequelize";

// const sequelize = new Sequelize({
//     dialect: 'mysql',
//     host: 'localhost',
//     port: '3306',
//     username: 'root',
//     password: 'Force_sql994',
//     database: 'atividade_8'
// });

const sequelize = new Sequelize('postgresql://pratica_games_user:8w8fjr0CylIb65SwAt820ox6G2ilIU4d@dpg-d1fl4pjipnbc739nq250-a/pratica_games_node');

export async function syncer() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
    } catch (error) {
        console.log('Erro ao acessar a base de dados.');
        return false;
    }
    return true;
}

export default sequelize;