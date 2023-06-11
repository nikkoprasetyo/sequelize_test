import { Router } from "express";
import indexController from "../controllers/indexController.js";

const router = Router();

router.get("/", indexController.locationsController.findAll);
router.post("/", indexController.locationsController.create);
router.get("/:id", indexController.locationsController.findOne);
router.put("/:id", indexController.locationsController.update);
router.delete("/:id", indexController.locationsController.deleted);

export default router;
