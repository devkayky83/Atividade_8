import { createJogo, deleteJogo, editJogo, listJogos } from "../../controllers/api/jogo_controller.js";
import { Router } from "express";

const jogo_router = Router();
jogo_router.get('/', listJogos);
jogo_router.post('/', createJogo);
jogo_router.put('/', editJogo);
jogo_router.delete('/', deleteJogo);

export default jogo_router;