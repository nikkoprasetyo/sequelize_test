import { Router } from "express";
import indexController from "../controllers/indexController.js";

const router = Router();

router.get("/", indexController.jobsController.findAll);
router.post("/", indexController.jobsController.create);
router.get("/:id", indexController.jobsController.findOne);
router.put("/:id", indexController.jobsController.update);
router.delete("/:id", indexController.jobsController.deleted);

export default router;
