import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgxFontAwesomeModule } from 'ngx-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppProviders } from './app.providers';
import { ArticleModule } from './features/article/article.module';
import { ListModule } from './features/list/list.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    NgxFontAwesomeModule,

    ArticleModule,
    ListModule,
    LayoutModule,
    SharedModule,

  ],
  providers: AppProviders,
  bootstrap: [AppComponent]
})
export class AppModule { }
