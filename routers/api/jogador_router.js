import { createJogador, deleteJogador, editJogador, listJogadores } from "../../controllers/api/jogador_controller.js";
import { Router } from "express";

const jogador_router = Router();
jogador_router.get('/', listJogadores);
jogador_router.post('/', createJogador);
jogador_router.put('/', editJogador);
jogador_router.delete('/', deleteJogador);

export default jogador_router;