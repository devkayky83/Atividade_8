import {
  createDesenvolvedor,
  deleteDesenvolvedor,
  editDesenvolvedor,
  listDesenvolvedores,
  saveDesenvolvedor,
} from "../../controllers/web/desenvolvedor_controller.js";
import { Router } from "express";

const desenvolvedor_web_router = Router();

desenvolvedor_web_router.get("/", listDesenvolvedores);
desenvolvedor_web_router.post("/create", createDesenvolvedor);
desenvolvedor_web_router.post("/edit", editDesenvolvedor);
desenvolvedor_web_router.post("/save", saveDesenvolvedor);
desenvolvedor_web_router.post("/delete", deleteDesenvolvedor);

export default desenvolvedor_web_router;
