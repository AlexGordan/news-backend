import express from "express";
import { newsService } from "../services/newsService.js";
import { ResponseNewsModel } from "../modelsDB/ArticleModel.js";

export interface FetchNewsParams {
  lang: string;
  pageSize: number;
}

const newsController = {
  getNewsAsync: async (req: express.Request<FetchNewsParams>, res: express.Response): Promise<express.Response<any, any> | undefined> => {
    try {
      const result: ResponseNewsModel | null = await newsService.getNews(req.query, res);

      if (result) {
        return res.json(result);
      }
    } catch (e: any) {
      return res.status(500).json({ message: e.message });
    }
  },
};

export { newsController };
