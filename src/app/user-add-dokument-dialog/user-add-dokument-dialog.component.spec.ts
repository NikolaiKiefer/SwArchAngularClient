import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddDokumentDialogComponent } from './user-add-dokument-dialog.component';

describe('UserAddDokumentDialogComponent', () => {
  let component: UserAddDokumentDialogComponent;
  let fixture: ComponentFixture<UserAddDokumentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddDokumentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddDokumentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
