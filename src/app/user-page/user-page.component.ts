import {Component, OnChanges, OnInit} from '@angular/core';
import {UserServiceService} from '../services/user-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {FileUploadDialogComponent} from '../file-upload-dialog/file-upload-dialog.component';
import {DokumentService} from '../services/dokument.service';
import {DokumentUploadDialogComponent} from '../dokument-upload-dialog/dokument-upload-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';
import {UserAddDokumentDialogComponent} from '../user-add-dokument-dialog/user-add-dokument-dialog.component';
import {UserRemoveDocDialogComponent} from '../user-remove-doc-dialog/user-remove-doc-dialog.component';
// import jsPDF from 'jspdf';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnChanges {
  user: any;
  uId: number;
  newFile;
  dokumentArray = [];
  fileArray = [];
  constructor(private dokumentService: DokumentService,
              private userService: UserServiceService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private domSanitizer: DomSanitizer) {
    this.uId = this.route.snapshot.params['uid'];
  }


  ngOnChanges() {
  }

  ngOnInit() {
    this.userService.getUser(this.uId).subscribe(value => {
      this.user = value;
      console.log(value);
      for (let doc of this.user.docs) {
        let fileArrayNew = [];
        for (let version of /*this.user.docs[0].versions*/ doc.versions) {
          // this.fileArray.push(this.base64ToArrayBuffer(version.file));
          fileArrayNew.push(this.base64ToArrayBuffer(version.file));
        }
        // this.dokumentArray.push(this.fileArray);
        this.dokumentArray.push(fileArrayNew);
      }
      console.log( this.dokumentArray);
    } );
    // this.userService.getUser().subscribe(value => this.user = value);
    // console.log(this.user);
  }


  openDialog(did): void {
    console.log(did);
    this.userService.setDokumentId(did);
    const dialogRef = this.dialog.open(FileUploadDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      // this.userService.fileChange(result, did);
      console.log('The dialog was closed');
    });
  }

  addDokument(dokument) {

    const dialogRef = this.dialog.open(DokumentUploadDialogComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.dokumentService.addDokument(result);
    });


    //use slice if your blob is too big
    console.log(this.user);
  }

  serializeJson() {
    console.log(this.user.docs[0].versions[0].file);
    /*const blob = new Blob([this.user.docs[0].versions[0].file], {type: "application/pdf"});
    let helllloo = URL.createObjectURL(blob);
    this.newFile = helllloo;
    console.log(helllloo);*/
    let result = this.base64ToArrayBuffer(this.user.docs[0].versions[0].file);
    this.saveByteArray(result);
    // this.newFile = this.domSanitizer.bypassSecurityTrustResourceUrl(helllloo);
    /*let fileeee = atob(this.user.docs[0].versions[0].file);
    window.open("data:application/pdf;base64," + fileeee);*/

    /*let doc = new jsPDF();
    let reader = new FileReader();
    const version = this.user.docs[0].versions[0].file;
    let newFile = version.binaryStringToUint8Array();
    // reader.readAsDataURL(this.user.docs[0].versions[0].file.binaryStream);
    console.log(newFile);
    reader.readAsArrayBuffer(this.user.docs[0].versions[0].file.binaryStream.filename);
    console.log('hi');
    // reader.readAsDataURL(this.user.docs[0].versions[0].file.binaryStream);
    // reader.onloadend
    reader.onload = (function(f) {
      console.log('hi');
      return function(e) {
        console.log('hello');
        console.log(e);
        doc.addImage(e, 'JPEG', 15, 40, 180, 160);
        doc.save('a4.pdf');
        // Here you can use `e.target.result` or `this.result`
        // and `f.name`.
      };
    })(this.user.docs[0].versions[0].file.binaryStream);
  /*serializeJson() {
    let doc = new jsPDF();
    let reader = new FileReader();
    // reader.readAsDataURL(this.user.docs[0].versions[0].file.binaryStream);
    // reader.onloadend
    reader.onload = (function(f) {
      console.log('hi');
      return function(e) {
        console.log('hello');
        console.log(e);
        doc.addImage(e, 'JPEG', 15, 40, 180, 160);
        doc.save('a4.pdf');
        // Here you can use `e.target.result` or `this.result`
        // and `f.name`.
      };
    })(this.user.docs[0].versions[0].file.binaryStream);*/
  }

  base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
      var ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }
    return bytes;
  }

  saveByteArray(byte) {
    var blob = new Blob([byte], {type: "application/pdf"});
    return URL.createObjectURL(blob);
  };

  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  openAddUserDialog(did) {
    const dialogRef = this.dialog.open(UserAddDokumentDialogComponent, {
      width: '450px',
      data: did
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openRemoveUserDialog(did) {
    const dialogRef = this.dialog.open(UserRemoveDocDialogComponent, {
      width: '450px',
      data: did
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
