import { newsService } from "../services/newsService.js";
const newsController = {
    getNewsAsync: async (req, res) => {
        try {
            const result = await newsService.getNews(req.query, res);
            if (result) {
                return res.json(result);
            }
        }
        catch (e) {
            return res.status(500).json({ message: e.message });
        }
    },
};
export { newsController };
//# sourceMappingURL=newsController.js.map