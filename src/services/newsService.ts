import express from "express";

import User from "../schemas/Article";
import { ResponseNewsModel } from "../modelsDB/ArticleModel";
import { FetchNewsParams } from "../controllers/newsController";

const newsService = {
  getNews: async (params: FetchNewsParams, res: express.Response): Promise<ResponseNewsModel | null> => {
    try {
      const { lang, pageSize } = params;

      const articles = await User.find({ lang });

      if (!articles) {
        res.status(400).json({ message: "Article not found" });
        return null;
      }

      return { articles, totalArticles: articles.length };
    } catch (e) {
      res.status(500).send({ message: "Something went wrong" });
      return null;
    }
  },
};

export { newsService };
