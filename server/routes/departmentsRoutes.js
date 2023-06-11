import { Router } from "express";
import indexController from "../controllers/indexController.js";

const router = Router();

router.get("/", indexController.departmentsController.findAll);
router.post("/", indexController.departmentsController.create);
router.get("/:id", indexController.departmentsController.findOne);
router.put("/:id", indexController.departmentsController.update);
router.delete("/:id", indexController.departmentsController.deleted);

export default router;
