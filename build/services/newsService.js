import Article from "../schemas/Article.js";
const newsService = {
    _getNews: async (params, res) => {
        try {
            const { lang, pageSize } = params;
            const articles = await Article.find();
            const findedArticles = articles.reduce((acc, article) => {
                if (article.language === lang && acc.length !== pageSize) {
                    acc.push(article.toObject());
                }
                return acc;
            }, []);
            if (!articles) {
                res.status(400).json({ message: "Article not found" });
                return null;
            }
            console.log(pageSize);
            console.log(findedArticles.length);
            return { articles: findedArticles, totalArticles: articles.length };
        }
        catch (e) {
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
//# sourceMappingURL=newsService.js.map