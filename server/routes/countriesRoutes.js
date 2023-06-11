import { Router } from "express";
import indexController from "../controllers/indexController.js";

const router = Router();

router.get("/", indexController.countriesController.findAll);
router.post("/", indexController.countriesController.create);
router.get("/:id", indexController.countriesController.findOne);
router.put("/:id", indexController.countriesController.update);
router.delete("/:id", indexController.countriesController.deleted);

export default router;
