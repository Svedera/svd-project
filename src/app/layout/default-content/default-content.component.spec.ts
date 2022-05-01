import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultContentComponent } from './default-content.component';

describe('DeafultContentComponent', () => {
  let component: DefaultContentComponent;
  let fixture: ComponentFixture<DefaultContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
