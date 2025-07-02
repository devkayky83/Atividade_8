import Desenvolvedor from "../../models/desenvolvedor.js";
import Jogo from "../../models/jogo.js";

async function createDesenvolvedor(req, res) {
  const desenvolvedor = await Desenvolvedor.create({
    name: req.body.name,
    country: req.body.country,
  });
  res.json(desenvolvedor);
}

async function listDesenvolvedores(req, res) {
  const list = await Desenvolvedor.findAll({ include: Jogo });
  res.render('desenvolvedores/desenvolvedores', { desenvolvedores: list });
}

async function editDesenvolvedor(req, res) {
    const desenvolvedor = await desenvolvedor.findOne({ where: { id: req.body.id } });
    res.render('desenvolvedores/desenvolvedores', { action: 'edit', desenvolvedor_editing: desenvolvedor.dataValues });
}

async function saveDesenvolvedor(req, res) {
    const desenvolvedor = await Desenvolvedor.findOne({ where: { id: req.body.id } });

    desenvolvedor.name = req.body.name;
    desenvolvedor.country = req.body.country;

    await desenvolvedor.save();
    res.render('alerts', { title: 'Desenvolvedores', body: 'Desenvolvedor edited.' });
}

async function deleteDesenvolvedor(req, res) {
    const desenvolvedor = await desenvolvedor.findOne({ where: { id: req.body.id } });
    await desenvolvedor.destroy();
    res.render('alerts', { title: 'Desenvolvedores', body: 'Desenvolvedor deleted.' });
}

export { createDesenvolvedor, listDesenvolvedores, editDesenvolvedor, saveDesenvolvedor, deleteDesenvolvedor };