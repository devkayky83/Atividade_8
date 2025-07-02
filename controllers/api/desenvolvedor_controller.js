import Jogo from "../../models/jogo.js";
import Desenvolvedor from "../../models/desenvolvedor.js";

async function createDesenvolvedor(req, res) {
  const desenvolvedor = await Desenvolvedor.create({
    name: req.body.name,
    country: req.body.country,
  });
  res.json(desenvolvedor);
}

async function listDesenvolvedores(req, res) {
  const list = await Desenvolvedor.findAll({ include: Jogo });
  res.json(list);
}

async function editDesenvolvedor(req, res) {
  const desenvolvedor = await Desenvolvedor.findOne({
    where: { id: req.body.id },
  });
  desenvolvedor.name = req.body.name;
  desenvolvedor.country = req.body.country;
  await desenvolvedor.save();
  res.json({ mensage: "Desenvolvedor alterado" });
}

async function deleteDesenvolvedor(req, res) {
  const desenvolvedor = await Desenvolvedor.findOne({
    where: { id: req.body.id },
  });
  await desenvolvedor.destroy();
  res.json({ mensage: "Desenvolvedor removido." });
}

export {
  createDesenvolvedor,
  listDesenvolvedores,
  editDesenvolvedor,
  deleteDesenvolvedor,
};
