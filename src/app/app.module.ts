import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppProviders } from './app.providers';
import { ArticleModule } from './features/article/article.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import {
  GameOfLiveModule
} from './features/game-of-life/game-of-life.module';
import { DrawingModule } from '@drawings/drawings.module';
import {
  FinanceModule
} from './features/finance/finance.module';
import { TestModule } from '@test/test/test.module';
import {
  KeyResultComponent
} from './features/okr/key-result/key-result.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyResultComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    ArticleModule,
    LayoutModule,
    SharedModule,
    GameOfLiveModule,
    DrawingModule,
    FinanceModule,
    TestModule
  ],
  providers: AppProviders,
  bootstrap: [AppComponent]
})
export class AppModule { }
