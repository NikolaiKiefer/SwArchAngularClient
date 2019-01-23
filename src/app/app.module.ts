import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { StartPageComponent } from './start-page/start-page.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDialogModule,
  MatDividerModule, MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatRadioModule
} from '@angular/material';
import { SignPComponent } from './sign-p/sign-p.component';
import { UserPageComponent } from './user-page/user-page.component';
import { MatExpansionModule} from '@angular/material';
import { TestMatItemComponent } from './test-mat-item/test-mat-item.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormControl, FormControlDirective, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import {AuthInterceptor} from './Authenticate/AuthInterceptor';
import { DokumentUploadDialogComponent } from './dokument-upload-dialog/dokument-upload-dialog.component';
import { UserAddDokumentDialogComponent } from './user-add-dokument-dialog/user-add-dokument-dialog.component';
import { UserRemoveDocDialogComponent } from './user-remove-doc-dialog/user-remove-doc-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartPageComponent,
    SignPComponent,
    UserPageComponent,
    TestMatItemComponent,
    FileUploadDialogComponent,
    DokumentUploadDialogComponent,
    UserAddDokumentDialogComponent,
    UserRemoveDocDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule,
    HttpClientModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi   : true}],
  bootstrap: [AppComponent],
  entryComponents: [FileUploadDialogComponent, DokumentUploadDialogComponent, UserAddDokumentDialogComponent, UserRemoveDocDialogComponent]
})
export class AppModule { }
