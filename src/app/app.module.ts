import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavComponent} from './pages/nav/nav.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ForumComponent} from './pages/forum/forum.component';
import {CoursesComponent} from './pages/settings/courses/courses.component';
import {ForumSectionComponent} from './pages/forum/forum-section/forum-section.component';
import {RegisterComponent} from './pages/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {ForumTalkComponent} from './pages/forum/forum-section/forum-talk/forum-talk.component';
import {UsersControlComponent} from './pages/settings/users-control/users-control.component';
import {AddUserComponent} from './pages/settings/users-control/add-user/add-user.component';
import {EditUserComponent} from './pages/settings/users-control/edit-user/edit-user.component';
import {MatPaginatorIntl} from '@angular/material';
import {MatPaginatorIntlPt} from './pt-paginator-intl';
import {SubjectsComponent} from './pages/settings/subjects/subjects.component';
import {AddSubjectComponent} from './pages/settings/subjects/add-subject/add-subject.component';
import {EditSubjectComponent} from './pages/settings/subjects/edit-subject/edit-subject.component';
import {ViewSubjectComponent} from './pages/settings/subjects/view-subject/view-subject.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {ClassroomsComponent} from './pages/settings/classrooms/classrooms.component';
import {AddCourseComponent} from './pages/settings/courses/add-course/add-course.component';
import {EditCourseComponent} from './pages/settings/courses/edit-course/edit-course.component';
import {ViewCourseComponent} from './pages/settings/courses/view-course/view-course.component';
import {AddClassroomComponent} from './pages/settings/classrooms/add-classroom/add-classroom.component';
import {EditClassroomComponent} from './pages/settings/classrooms/edit-classroom/edit-classroom.component';
import {ViewClassroomComponent} from './pages/settings/classrooms/view-classroom/view-classroom.component';
import {ViewUserComponent} from './pages/settings/users-control/view-user/view-user.component';
import {ThemesComponent} from './pages/themes/themes.component';
import {AddEditThemeComponent} from './pages/themes/add-edit-theme/add-edit-theme.component';
import {ChatsComponent} from './pages/chats/chats.component';
import {ChatSectionComponent} from './pages/chats/chat-section/chat-section.component';
import {VideochatsComponent} from './pages/videochats/videochats.component';
import {VideochatsSectionComponent} from './pages/videochats/videochats-section/videochats-section.component';
import {WebcamModule} from 'ngx-webcam';
import {DialogoComumComponent} from './services/dialog/dialogo.service';
import {LoginComponent} from './login/login.component';
import {MatriculaAlunoComponent} from './pages/settings/matricula-aluno/matricula-aluno.component';
import {MatriculaMonitorComponent} from './pages/settings/matricula-monitor/matricula-monitor.component';
import {DesignarMonitorComponent} from './pages/settings/matricula-monitor/designar-monitor/designar-monitor.component';
import {ChatDiscussaoComponent} from './pages/chats/chat-section/chat-discussao/chat-discussao.component';
import {
  CovalentCommonModule, CovalentDataTableModule,
  CovalentDialogsModule,
  CovalentExpansionPanelModule,
  CovalentLayoutModule,
  CovalentLoadingModule,
  CovalentMediaModule, CovalentMenuModule,
  CovalentMessageModule,
  CovalentNotificationsModule,
  CovalentPagingModule,
  CovalentSearchModule,
  CovalentStepsModule
} from '@covalent/core';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import { AddChatComponent } from './pages/chats/chat-section/add-chat/add-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    ForumComponent,
    CoursesComponent,
    ForumSectionComponent,
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
    ThemesComponent,
    AddEditThemeComponent,
    ChatsComponent,
    ChatSectionComponent,
    VideochatsComponent,
    VideochatsSectionComponent,
    DialogoComumComponent,
    LoginComponent,
    MatriculaAlunoComponent,
    MatriculaMonitorComponent,
    DesignarMonitorComponent,
    ChatDiscussaoComponent,
    AddChatComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebcamModule,
    /** Covalent Modules */
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentMessageModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDNjJcqblooxLmPdxfLmsdaJOxVU1bTNu4',
      authDomain: 'discite-faesa.firebaseapp.com',
      databaseURL: 'https://discite-faesa.firebaseio.com',
      projectId: 'discite-faesa',
      storageBucket: 'discite-faesa.appspot.com',
      messagingSenderId: '657446086577',
      appId: '1:657446086577:web:692ea38f440b87ff54ff90'
    })
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: MatPaginatorIntlPt}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

