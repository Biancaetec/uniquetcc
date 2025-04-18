import express from 'express';
import CategoriasController from '../controllers/categorias.controller.js';

const router = express.Router();

// Criar Pagamento
router.post('/categorias', CategoriasController.createCategorias);
router.get('/categorias', CategoriasController.createCategorias);
router.delete('/categorias', CategoriasController.createCategorias);
router.patch('/categorias', CategoriasController.createCategorias);

// Atualizar Pagamento
// router.patch('/categorias/:id', CategoriasController.updateCategorias);

export default router;