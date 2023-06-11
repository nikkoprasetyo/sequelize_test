import { Router } from "express";
import indexController from "../controllers/indexController.js";

const router = Router();

router.get("/", indexController.orderDetailsController.findAll);
router.post("/", indexController.orderDetailsController.create);
router.get("/:id", indexController.orderDetailsController.findOne);
router.put("/:id", indexController.orderDetailsController.update);
router.delete("/:id", indexController.orderDetailsController.deleted);

export default router;
