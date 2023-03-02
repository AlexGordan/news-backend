import config from "./config/config.json" assert { type: "json" };
import express from "express";
import mongoose from "mongoose";
import newsRouter from "./routes/news.route.js";
const PORT = config.port || 3001;
const app = express();
app.use(express.json());
app.use(function (_, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Max-Age", "1000000000");
    next();
});
app.use("/api/news", newsRouter);
async function start() {
    try {
        await mongoose.connect(config.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(PORT, () => {
            console.log(`started on port: ${PORT}`);
        });
    }
    catch (e) {
        console.log(`Server Error: ${e}`);
        process.exit(1);
    }
}
start();
//# sourceMappingURL=app.js.map