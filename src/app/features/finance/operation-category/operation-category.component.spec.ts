import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationCategoryComponent } from './operation-category.component';

describe('OperationCategoryComponent', () => {
  let component: OperationCategoryComponent;
  let fixture: ComponentFixture<OperationCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
