import { Router } from "express";
import { CardapioController } from "./controller/CardapioController";

const router = Router();

const controller = new CardapioController();

router.get('/cardapio', controller.getPlates);
router.post('/cardapio', controller.createPlate);
router.delete('/cardapio/:id', controller.deletePlate);
router.patch('/cardapio/:id', controller.updatePlate);          

export default router;