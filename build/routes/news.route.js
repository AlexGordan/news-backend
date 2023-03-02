import { Router } from "express";
import { newsController } from "../controllers/newsController.js";
const newsRouter = Router();
newsRouter.get("/", newsController.getNewsAsync);
export default newsRouter;
//# sourceMappingURL=news.route.js.map