import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxFontAwesomeModule } from 'ngx-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleModule } from './features/article/article.module';
import { ListModule } from './features/list/list.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ArticleModule,
    ListModule,
    LayoutModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NgxFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
