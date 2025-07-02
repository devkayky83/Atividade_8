import { createDesenvolvedor, deleteDesenvolvedor, editDesenvolvedor, listDesenvolvedores } from "../../controllers/api/desenvolvedor_controller.js";
import { Router } from "express";

const desenvolvedor_router = Router();
desenvolvedor_router.get('/', listDesenvolvedores);
desenvolvedor_router.post('/', createDesenvolvedor);
desenvolvedor_router.put('/', editDesenvolvedor);
desenvolvedor_router.delete('/', deleteDesenvolvedor);

export default desenvolvedor_router;