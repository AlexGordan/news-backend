import express from "express";
import Article from "../schemas/Article.js";
import { ResponseNewsModel } from "../modelsDB/ArticleModel.js";

const newsService = {
  _getNews: async (params: any, res: express.Response): Promise<ResponseNewsModel | null> => {
    try {
      const { lang, pageSize } = params;

      const articles = await Article.find();

      const findedArticles = articles.reduce((acc, article) => {
        if (article.language === lang && acc.length < pageSize) {
          acc.push(article.toObject());
        }

        return acc;
      }, []);

      if (!articles || !articles.length) {
        res.status(400).json({ message: "Articles not found" });
        return null;
      }

      return { articles: findedArticles, totalArticles: articles.length };
    } catch (e) {
      res.status(500).send({ message: "Something went wrong" });
      return null;
    }
  },
  get getNews() {
    return this._getNews;
  },
  set getNews(value) {
    this._getNews = value;
  },
};

export { newsService };
