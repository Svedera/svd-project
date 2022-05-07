import { Observable } from 'rxjs';

import { Article } from 'src/app/core/backend-models/article';
import { ArticleList } from 'src/app/core/backend-models/articleList';

export abstract class ArticleHandler {
  abstract getArticle: (id: string | null) => Observable<Article>;
  abstract getArticleList: () => Observable<ArticleList>;
  abstract getArticleListWithLimit: (limit: number) => Observable<ArticleList>;
}
