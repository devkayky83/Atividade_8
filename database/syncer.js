import sequelize from "./mysql.js";
import Jogador from "../models/jogador.js";
import Desenvolvedor from "../models/desenvolvedor.js";
import Jogo from "../models/jogo.js";

Jogo.belongsTo(Desenvolvedor);
Desenvolvedor.hasMany(Jogo);

Jogo.belongsToMany(Jogador, { through: "JogoJogadores" });
Jogador.belongsToMany(Jogo, { through: "JogoJogadores" });

async function syncer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Banco sincronizado com sucesso.");
    return true;
  } catch (error) {
    console.error("Erro ao acessar a base de dados:", error);
    return false;
  }
}

export { syncer, Jogo, Jogador, Desenvolvedor };
