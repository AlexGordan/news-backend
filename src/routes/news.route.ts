import { Router } from "express";
import { check } from "express-validator";
import { newsController } from "../controllers/newsController";

const newsRouter = Router();

newsRouter.get("/", newsController.getNewsAsync);

export default newsRouter;
