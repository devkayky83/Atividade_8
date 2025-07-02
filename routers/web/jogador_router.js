import {
  createJogador,
  deleteJogador,
  editJogador,
  listJogadores,
  saveJogador,
} from "../../controllers/web/jogador_controller.js";
import { Router } from "express";

const jogador_web_router = Router();

jogador_web_router.get("/", listJogadores);
jogador_web_router.post("/create", createJogador);
jogador_web_router.post("/edit", editJogador);
jogador_web_router.post("/save", saveJogador);
jogador_web_router.post("/delete", deleteJogador);

export default jogador_web_router;
