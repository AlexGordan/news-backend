import express from "express";
import { validationResult } from "express-validator";
import { ResponseNewsModel } from "../modelsDB/ArticleModel";

import { newsService } from "../services/newsService";

export interface FetchNewsParams {
  lang: string;
  pageSize: number;
}

const newsController = {
  getNewsAsync: async (req: express.Request<FetchNewsParams>, res: express.Response): Promise<express.Response<any, any> | undefined> => {
    try {
      const result: ResponseNewsModel | null = await newsService.getNews(req.params, res);

      if (result) {
        return res.json(result);
      }
    } catch (e: any) {
      return res.status(500).json({ message: e.message });
    }
  },
};

export { newsController };
