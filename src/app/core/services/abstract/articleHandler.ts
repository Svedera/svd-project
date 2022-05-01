import { Observable } from 'rxjs';

import { Article } from '../../models/article';

export abstract class ArticleHandler {
  abstract getArticle: () => Observable<Article>;
}
