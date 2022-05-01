import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '@models/article';

@Component({
  selector: 'twn-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article | null = null;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.article = this.route.snapshot.data.article as Article;
  }
}
