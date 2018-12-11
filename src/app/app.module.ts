import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { StartPageComponent } from './start-page/start-page.component';
import {MatButtonModule, MatCardModule, MatDividerModule, MatInputModule, MatListModule, MatMenuModule} from '@angular/material';
import { SignPComponent } from './sign-p/sign-p.component';
import { UserPageComponent } from './user-page/user-page.component';
import { MatExpansionModule} from '@angular/material';
import { TestMatItemComponent } from './test-mat-item/test-mat-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartPageComponent,
    SignPComponent,
    UserPageComponent,
    TestMatItemComponent
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
