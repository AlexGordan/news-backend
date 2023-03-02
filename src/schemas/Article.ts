import { Schema, model } from "mongoose";
import { ArticleModel } from "../modelsDB/ArticleModel";

const schema = new Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  content: { type: String, required: true },
  description: { type: String, required: true },
  publishedAt: { type: String, required: true },
  source: { type: Object, required: true },
});
export default model<ArticleModel>("New", schema);
