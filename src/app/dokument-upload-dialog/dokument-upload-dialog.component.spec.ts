import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DokumentUploadDialogComponent } from './dokument-upload-dialog.component';

describe('DokumentUploadDialogComponent', () => {
  let component: DokumentUploadDialogComponent;
  let fixture: ComponentFixture<DokumentUploadDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DokumentUploadDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DokumentUploadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
