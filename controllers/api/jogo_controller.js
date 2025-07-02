import Desenvolvedor from "../../models/desenvolvedor.js";
import Jogo from "../../models/jogo.js";
import Jogador from "../../models/jogador.js";

async function createJogo(req, res) {
  try {
    const jogadores = [];

    for (let i = 0; i < req.body.jogadores.length; i++) {
      const jogador = await Jogador.findByPk(req.body.jogadores[i]);
      if (jogador) jogadores.push(jogador);
    }

    const jogo = await Jogo.create({
      title: req.body.title,
      description: req.body.description,
      year: req.body.year,
      platform: req.body.platform,
      DesenvolvedorId: req.body.DesenvolvedorId,
    });

    await jogo.addJogadores(jogadores);
    res.json(jogo);
  } catch (err) {
    console.error("Erro detalhado ao criar jogo:", err.message);
    res.status(500).json({ error: 'Erro ao criar jogo.' });
  }
}

async function listJogos(req, res) {
  const list = await Jogo.findAll({ include: [Jogador, Desenvolvedor] });
  res.json(list);
}

async function editJogo(req, res) {
  const jogo = await Jogo.findOne({ where: { id: req.body.id } });
  jogo.title = req.body.title;
  jogo.description = req.body.description;
  (jogo.year = req.body.year), (jogo.platform = req.body.platform);
  await jogo.save();
  res.json({ mensage: "Jogo alterado" });
}

async function deleteJogo(req, res) {
  const jogo = await Jogo.findOne({ where: { id: req.body.id } });
  await jogo.destroy();
  res.json({ mensage: "Jogo removido." });
}

export { createJogo, listJogos, editJogo, deleteJogo };
