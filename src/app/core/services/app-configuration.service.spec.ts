import { TestBed } from '@angular/core/testing';
import { ConfigurationService } from './app-configuration.service';


describe('AppConfigurationService', () => {
  let service: ConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurationService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
