import Jogador from "../../models/jogador.js";
import Desenvolvedor from "../../models/desenvolvedor.js";
import Jogo from "../../models/jogo.js";

async function createJogo(req, res) {

    const jogadores = [];

    for (let i = 0; i < req.body.jogadores.length; i++) {
        const jogador = await Jogador.findByPk(req.body.jogadores[i]);
        jogadores.push(jogador);
    }

    const jogo = await Jogo.create({
        title: req.body.title,
        description: req.body.description,
        year: req.body.year,
        platform: req.body.platform,
        DirectorId: req.body.DirectorId
    });

    await jogo.addActors(jogadores);
    res.render('alerts', { title: 'Jogos', body: 'Jogos created.' });
}

async function listJogos(req, res) {
    const list = await Jogo.findAll({ include: [Jogador, Desenvolvedor], raw: true });
    res.render('jogos/jogos', { jogos: list });
}

async function editJogo(req, res) {
    const jogo = await Jogo.findOne({ where: { id: req.body.id } });
    res.render('jogos/jogos', { action: 'edit', jogo_editing: jogo.dataValues });
}

async function saveJogo(req, res) {
    const jogo = await Jogo.findOne({ where: { id: req.body.id } });

    jogo.title = req.body.title;
    jogo.description = req.body.description;
    jogo.year = req.body.year;
    jogo.platform = req.body.platform;
    jogo.Desenvolvedor = req.body.Desenvolvedor;

    await jogo.save();
    res.render('alerts', { title: 'Jogos', body: 'Jogo edited.' });
}

async function deleteJogo(req, res) {
    const jogo = await Jogo.findOne({ where: { id: req.body.id } });
    await jogo.destroy();
    res.render('alerts', { title: 'Jogos', body: 'Jogo deleted.' });
}

export { createJogo, listJogos, editJogo, saveJogo, deleteJogo };