import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatItemComponent } from './test-mat-item.component';

describe('TestMatItemComponent', () => {
  let component: TestMatItemComponent;
  let fixture: ComponentFixture<TestMatItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMatItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
