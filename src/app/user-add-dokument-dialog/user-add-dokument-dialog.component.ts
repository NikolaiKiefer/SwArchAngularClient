import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserServiceService} from '../services/user-service.service';

@Component({
  selector: 'app-user-add-dokument-dialog',
  templateUrl: './user-add-dokument-dialog.component.html',
  styleUrls: ['./user-add-dokument-dialog.component.scss']
})
export class UserAddDokumentDialogComponent implements OnInit {

  userName: String;
  userChecksOut = false;
  userToAdd: String;

  constructor(
    public dialogRef: MatDialogRef<UserAddDokumentDialogComponent>,
    private userService: UserServiceService,
    @Inject(MAT_DIALOG_DATA) public data: String) { }

  ngOnInit() {
  }

  closeDialog() {

    this.dialogRef.close();
  }

  findUser() {
    this.userService.findUser(this.userName).subscribe(result => {
      this.userToAdd = result['name'];
      this.userChecksOut = true;
    },error => {
      alert(this.userName + ' nicht gefunden');
      this.userChecksOut = false;
    });
  }

  addUser() {
    this.userService.addDocToExistingUser(this.userToAdd, this.data);
  }

}
