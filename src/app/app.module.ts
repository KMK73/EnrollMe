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

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { AlertModule, BsModalService } from 'ngx-bootstrap';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdSelectModule,
    BootstrapModalModule,
    BootstrapModalModule.forRoot({container: document.body}),
    AlertModule.forRoot(),
    FormsModule
  ],
  entryComponents: [
    AddStudentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
