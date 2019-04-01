import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './pages/nav/nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForumComponent } from './pages/forum/forum.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ForumSectionComponent } from './pages/forum/forum-section/forum-section.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { ForumTalkComponent } from './pages/forum/forum-section/forum-talk/forum-talk.component';
import { UsersControlComponent } from './pages/users-control/users-control.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    ForumComponent,
    CoursesComponent,
    ForumSectionComponent,
    LoginComponent,
    RegisterComponent,
    ForumTalkComponent,
    UsersControlComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
