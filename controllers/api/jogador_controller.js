import Jogo from '../../models/jogo.js';
import Jogador from '../../models/jogador.js';

async function createJogador(req, res) {
    const jogador = await Jogador.create({
        name: req.body.name,
        age: req.body.age
    });
    res.json(jogador);
}

async function listJogadores(req, res) {
    const list = await Jogador.findAll({ include: Jogo });
    res.json(list);
}

async function editJogador(req, res) {
    const jogador = await Jogador.findOne({ where: { id: req.body.id } });
    jogador.name = req.body.name;
    jogador.age = req.body.age;
    await jogador.save();
    res.json({ mensage: 'Jogador alterado' });
}

async function deleteJogador(req, res) {
    const jogador = await Jogador.findOne({ where: { id: req.body.id } });
    await jogador.destroy();
    res.json({ mensage: 'Jogador removido.' });
}

export { createJogador, listJogadores, editJogador, deleteJogador };