import { Router } from "express";
import indexController from "../controllers/indexController.js";

const router = Router();

router.get("/", indexController.jobHistoriesController.findAll);
router.post("/", indexController.jobHistoriesController.create);
router.get("/:id", indexController.jobHistoriesController.findOne);
router.put("/:id", indexController.jobHistoriesController.update);
router.delete("/:id", indexController.jobHistoriesController.deleted);

export default router;
