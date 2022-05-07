import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from 'src/app/core/backend-models/article';

@Component({
  selector: 'svd-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article | null = null;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.article = this.route.snapshot.data.article as Article ?? null;
  }
}
