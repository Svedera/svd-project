import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';

import { Article } from '@backend-models/article';
import { ArticleList } from '@backend-models/articleList';
import { Paging } from '@models/pagingData';
import { ColumnData } from '@models/tableData';
import {
  sortObjectNumberField,
  sortObjectStringField
} from '@shared/utilities/sorting';
import { AppRouts } from '@enums/appRouts';

@Component({
  selector: 'svd-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  AppRouts = AppRouts;

  @Input() elementsPerPage: number = 9;
  @Input() pageBarOffset: number = 2;

  records: Article[] | null = null;
  recordsStream: Observable<Article[]> | null = null;

  columnData: ColumnData<Article>[] | null = null;
  columnsStream: Observable<ColumnData<Article>[]> | null = null;

  paging: Paging | null = null;
  pagingStream: Observable<Paging> | null = null;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const articleLst =
      this.route.snapshot.data.articleLst as ArticleList ?? null;
    this.records = articleLst.list;
    this.recordsStream = of(this.records);

    this.columnData = this.createColumns();
    this.columnsStream = of(this.columnData);

    this.paging = new Paging(
      this.records.length,
      this.elementsPerPage,
      this.pageBarOffset);
    this.pagingStream = of(this.paging);
  }

  private createColumns(): ColumnData<Article>[] {
    const firstName = new ColumnData<Article>(
      'First name',
      20,
      false,
      (article: Article) => article.firstname ?? '',
      sortObjectStringField(
        (article: Article) => article.firstname)
    );
    const surname = new ColumnData<Article>(
      'Surname',
      20,
      false,
      (article: Article) => article.surname ?? '',
      sortObjectStringField((article: Article) => article.surname)
    );

    const gender = new ColumnData<Article>(
      'Sex',
      20,
      false,
      (article: Article) => article?.sex ?? '',
      sortObjectStringField((article: Article) => article.sex)
    );

    const personalCode = new ColumnData<Article>(
      'Personal code',
      20,
      false,
      (article: Article) =>
        article?.personal_code?.toString() ?? '',
      sortObjectNumberField((article: Article) =>
        article?.personal_code)
    );

    const phone = new ColumnData<Article>(
      'Phone',
      20,
      true,
      (article: Article) => article?.phone ?? ''
    );

    return [firstName, surname, gender, personalCode, phone];
  }
}
