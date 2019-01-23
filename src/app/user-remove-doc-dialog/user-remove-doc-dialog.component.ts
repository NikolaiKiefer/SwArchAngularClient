import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserServiceService} from '../services/user-service.service';

@Component({
  selector: 'app-user-remove-doc-dialog',
  templateUrl: './user-remove-doc-dialog.component.html',
  styleUrls: ['./user-remove-doc-dialog.component.scss']
})
export class UserRemoveDocDialogComponent implements OnInit {

  userName: String;
  userChecksOut = false;
  userToRemove: String;

  constructor(
    public dialogRef: MatDialogRef<UserRemoveDocDialogComponent>,
    private userService: UserServiceService,
    @Inject(MAT_DIALOG_DATA) public data: String) { }

  ngOnInit() {
  }

  closeDialog() {

    this.dialogRef.close();
  }

  findUser() {
    this.userService.findUser(this.userName).subscribe(result => {
      this.userToRemove = result['name'];
      this.userChecksOut = true;
    },error => {
      alert(this.userName + ' nicht gefunden');
      this.userChecksOut = false;
    });
  }

  removeUser() {
    this.userService.removeDocFromExistingUser(this.userToRemove, this.data);
  }

}
