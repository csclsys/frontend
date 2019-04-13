import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ForumComponent} from './pages/forum/forum.component';
import {CoursesComponent} from './pages/settings/courses/courses.component';
import {ForumSectionComponent} from './pages/forum/forum-section/forum-section.component';
import {RegisterComponent} from './pages/register/register.component';
import {ForumTalkComponent} from './pages/forum/forum-section/forum-talk/forum-talk.component';
import {UsersControlComponent} from './pages/settings/users-control/users-control.component';
import {AddUserComponent} from './pages/settings/users-control/add-user/add-user.component';
import {EditUserComponent} from './pages/settings/users-control/edit-user/edit-user.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {SubjectsComponent} from './pages/settings/subjects/subjects.component';
import {ClassroomsComponent} from './pages/settings/classrooms/classrooms.component';
import {ViewUserComponent} from "./pages/settings/users-control/view-user/view-user.component";
import {AddCourseComponent} from "./pages/settings/courses/add-course/add-course.component";
import {EditCourseComponent} from "./pages/settings/courses/edit-course/edit-course.component";
import {ViewCourseComponent} from "./pages/settings/courses/view-course/view-course.component";
import {AddSubjectComponent} from "./pages/settings/subjects/add-subject/add-subject.component";
import {EditSubjectComponent} from "./pages/settings/subjects/edit-subject/edit-subject.component";
import {ViewSubjectComponent} from "./pages/settings/subjects/view-subject/view-subject.component";
import {AddClassroomComponent} from "./pages/settings/classrooms/add-classroom/add-classroom.component";
import {EditClassroomComponent} from "./pages/settings/classrooms/edit-classroom/edit-classroom.component";
import {ViewClassroomComponent} from "./pages/settings/classrooms/view-classroom/view-classroom.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'usuarios', component: UsersControlComponent},
  {path: 'cadastro', component: RegisterComponent, pathMatch: 'full'},
  {
    path: '', children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'forum', children: [
          {path: '', component: ForumComponent},
          {path: 'secao', children: [
              {path: '', component: ForumSectionComponent},
              {path: 'discussao', component: ForumTalkComponent},
            ]},
        ]},

      /****** SETTINGS ******/
      {path: 'configuracoes', children: [
          {path: '', component: SettingsComponent},
        ]},


      /****** COURSES ******/
      {path: 'cursos', children: [
          {path: '', component: CoursesComponent},
          {path: 'cadastrar', component: AddCourseComponent},
          {path: 'editar', component: EditCourseComponent},
          {path: 'visualizar', component: ViewCourseComponent},
        ]},

      /****** SUBJECTS ******/
      {path: 'disciplinas', children: [
          {path: '', component: SubjectsComponent},
          {path: 'cadastrar', component: AddSubjectComponent},
          {path: 'editar', component: EditSubjectComponent},
          {path: 'visualizar', component: ViewSubjectComponent},
        ]},

      /****** CLASSROOMS ******/
      {path: 'turmas', children: [
          {path: '', component: ClassroomsComponent},
          {path: 'cadastrar', component: AddClassroomComponent},
          {path: 'editar', component: EditClassroomComponent},
          {path: 'visualizar', component: ViewClassroomComponent},
        ]},

      /****** USERS ******/
      {path: 'usuarios', children: [
          {path: '', component: UsersControlComponent},
          {path: 'cadastrar', component: AddUserComponent},
          {path: 'editar', component: EditUserComponent},
          {path: 'visualizar', component: ViewUserComponent},
        ]},
    ]
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
