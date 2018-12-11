import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignPComponent } from './sign-p.component';

describe('SignPComponent', () => {
  let component: SignPComponent;
  let fixture: ComponentFixture<SignPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
