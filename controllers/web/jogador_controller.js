import Jogador from "../../models/jogador.js";
import Jogo from "../../models/jogo.js";

async function createJogador(req, res) {
  const jogador = await Jogador.create({
    name: req.body.name,
    country: req.body.country
  });
  res.json(jogador);
}

async function listJogadores(req, res) {
  const list = await Jogador.findAll({ include: Jogo });
  res.render('jogadores/jogadores', { jogadores: list });
}

async function editJogador(req, res) {
    const jogadores = await jogadores.findOne({ where: { id: req.body.id } });
    res.render('jogadores/jogadores', { action: 'edit', jogadores_editing: jogadores.dataValues });
}

async function saveJogador(req, res) {
    const jogadores = await Jogador.findOne({ where: { id: req.body.id } });

    jogadores.name = req.body.name;
    jogadores.age = req.body.age;

    await jogadores.save();
    res.render('alerts', { title: 'Jogadores', body: 'Jogador edited.' });
}

async function deleteJogador(req, res) {
    const jogadores = await jogadores.findOne({ where: { id: req.body.id } });
    await jogadores.destroy();
    res.render('alerts', { title: 'Jogadores', body: 'Jogadores deleted.' });
}

export { createJogador, listJogadores, editJogador, saveJogador, deleteJogador };