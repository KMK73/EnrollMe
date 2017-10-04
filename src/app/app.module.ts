import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentsComponent } from './pages/students/students.component';
import { ProfileBarComponent } from './components/profile-bar/profile-bar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';


import { AlertModule, BsModalService, ModalModule } from 'ngx-bootstrap';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import * as jQuery from 'jquery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: ProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    StudentsComponent,
    ProfileBarComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes),
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdSelectModule,
    AlertModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    // BootstrapModalModule,
    // BootstrapModalModule.forRoot({container: document.body}),
  ],
  entryComponents: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
