import { Router } from "express";
import indexController from "../controllers/indexController.js";

const router = Router();

router.get("/", indexController.employeesController.findAll);
router.post("/", indexController.employeesController.create);
router.get("/:id", indexController.employeesController.findOne);
router.put("/:id", indexController.employeesController.update);
router.delete("/:id", indexController.employeesController.deleted);

export default router;
