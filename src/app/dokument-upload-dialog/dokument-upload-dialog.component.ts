import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dokument-upload-dialog',
  templateUrl: './dokument-upload-dialog.component.html',
  styleUrls: ['./dokument-upload-dialog.component.scss']
})
export class DokumentUploadDialogComponent implements OnInit {

  name: String;

  constructor(
    public dialogRef: MatDialogRef<DokumentUploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String) { }

  ngOnInit() {
  }

  closeDialog() {

    this.dialogRef.close(this.name);
  }

}
