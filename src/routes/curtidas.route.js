import { Router } from "express";
import { controllerCurtidas } from "../controller/curtidas.controller.js";

export const routerCurtidas = Router()

routerCurtidas.get("/", controllerCurtidas.getAll)
routerCurtidas.get("/:id", controllerCurtidas.getById)
routerCurtidas.post("/", controllerCurtidas.create)
routerCurtidas.delete("/:id", controllerCurtidas.delete)
routerCurtidas.put("/:id", controllerCurtidas.updatePut)