import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './users/register/register.component';
import { ViewuserComponent } from './users/viewuser/viewuser.component';
import { UpdateuserComponent } from './users/updateuser/updateuser.component';
import { DeleteuserComponent } from './users/deleteuser/deleteuser.component';
import { LandingComponent } from './home/landing/landing.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppfooterComponent } from './appfooter/appfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ViewuserComponent,
    UpdateuserComponent,
    DeleteuserComponent,
    LandingComponent,
    AppheaderComponent,
    AppfooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
