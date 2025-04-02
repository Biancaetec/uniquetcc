import express from 'express';
import PedidosController from '../controllers/pedidos.controller.js';

const router = express.Router();

// Criar Pedidos
router.post('/pedidos', PedidosController.createPedidos);

// Atualizar Pedidos
router.patch('/pedidos/:id', PedidosController.updatePedidos);

export default router;