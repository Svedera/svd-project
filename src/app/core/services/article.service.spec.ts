import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { ArticleService } from './article.service';
import {
  ApiConfiguration,
  TimeoutConfiguration
} from 'src/app/core/models/appConfiguration';
import { ApiConfig, TimeoutConfig } from 'src/app/app.config';

describe('ArticleService', () => {
  let httpTestingController: HttpTestingController;
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ArticleService,
        { provide: TimeoutConfiguration, useValue: TimeoutConfig },
        { provide: ApiConfiguration, useValue: ApiConfig }
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ArticleService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
