import {
  createJogo,
  deleteJogo,
  editJogo,
  listJogos,
  saveJogo,
} from "../../controllers/web/jogo_controller.js";
import { Router } from "express";

const jogo_web_router = Router();

jogo_web_router.get("/", listJogos);
jogo_web_router.post("/create", createJogo);
jogo_web_router.post("/edit", editJogo);
jogo_web_router.post("/save", saveJogo);
jogo_web_router.post("/delete", deleteJogo);

export default jogo_web_router;
