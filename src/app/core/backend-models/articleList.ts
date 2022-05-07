import { Article } from './article';
import { ListStats } from './listStats';

export interface ArticleList {
  stats: ListStats;
  list: Article[];
}
