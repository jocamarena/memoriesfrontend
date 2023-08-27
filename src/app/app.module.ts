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
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';

const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'users/view', component: ViewuserComponent },
  { path: 'users/update', component: UpdateuserComponent },
  { path: 'users/delete', component: DeleteuserComponent },
  { path: 'home', component: LandingComponent },
  { path: 'appheader', component: AppheaderComponent },
  { path: 'appfooter', component: AppfooterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ViewuserComponent,
    UpdateuserComponent,
    DeleteuserComponent,
    LandingComponent,
    AppheaderComponent,
    AppfooterComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
