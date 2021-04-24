import { Router } from "express";
import multer from "multer";
import OrphanageController from "./controllers/OrphanageController";
import uploadConfig from "./config/upload";
const routes = Router();
const orphanageController = new OrphanageController();
const upload = multer(uploadConfig);

routes.get("/orphanages", orphanageController.index);
routes.get("/orphanages/:id", orphanageController.show);
routes.post("/orphanages", upload.array("images"), orphanageController.create);
export default routes;
