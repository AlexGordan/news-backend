export interface ArticleModel {
  url: string;
  title: string;
  image: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { name: string; url: string };
}

export interface ResponseNewsModel {
  articles: ArticleModel[];
  totalArticles: number;
}