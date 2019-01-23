import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRemoveDocDialogComponent } from './user-remove-doc-dialog.component';

describe('UserRemoveDocDialogComponent', () => {
  let component: UserRemoveDocDialogComponent;
  let fixture: ComponentFixture<UserRemoveDocDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRemoveDocDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRemoveDocDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
