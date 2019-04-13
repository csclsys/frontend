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
import { CoursesComponent } from './pages/settings/courses/courses.component';
import { ForumSectionComponent } from './pages/forum/forum-section/forum-section.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { ForumTalkComponent } from './pages/forum/forum-section/forum-talk/forum-talk.component';
import { UsersControlComponent } from './pages/settings/users-control/users-control.component';
import { AddUserComponent } from './pages/settings/users-control/add-user/add-user.component';
import { EditUserComponent } from './pages/settings/users-control/edit-user/edit-user.component';
import {MatPaginatorIntl} from '@angular/material';
import {MatPaginatorIntlPt} from './pt-paginator-intl';
import { SubjectsComponent } from './pages/settings/subjects/subjects.component';
import { AddSubjectComponent } from './pages/settings/subjects/add-subject/add-subject.component';
import { EditSubjectComponent } from './pages/settings/subjects/edit-subject/edit-subject.component';
import { ViewSubjectComponent } from './pages/settings/subjects/view-subject/view-subject.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ClassroomsComponent } from './pages/settings/classrooms/classrooms.component';
import { AddCourseComponent } from './pages/settings/courses/add-course/add-course.component';
import { EditCourseComponent } from './pages/settings/courses/edit-course/edit-course.component';
import { ViewCourseComponent } from './pages/settings/courses/view-course/view-course.component';
import { AddClassroomComponent } from './pages/settings/classrooms/add-classroom/add-classroom.component';
import { EditClassroomComponent } from './pages/settings/classrooms/edit-classroom/edit-classroom.component';
import { ViewClassroomComponent } from './pages/settings/classrooms/view-classroom/view-classroom.component';
import { ViewUserComponent } from './pages/settings/users-control/view-user/view-user.component';

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
    AddUserComponent,
    EditUserComponent,
    SubjectsComponent,
    AddSubjectComponent,
    EditSubjectComponent,
    ViewSubjectComponent,
    SettingsComponent,
    ClassroomsComponent,
    AddCourseComponent,
    EditCourseComponent,
    ViewCourseComponent,
    AddClassroomComponent,
    EditClassroomComponent,
    ViewClassroomComponent,
    ViewUserComponent,
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
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlPt}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
