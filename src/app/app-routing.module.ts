import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavComponent} from './pages/nav/nav.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ForumComponent} from './pages/forum/forum.component';
import {CoursesComponent} from './pages/courses/courses.component';
import {ForumSectionComponent} from './pages/forum/forum-section/forum-section.component';
import {RegisterComponent} from './pages/register/register.component';
import {ForumTalkComponent} from './pages/forum/forum-section/forum-talk/forum-talk.component';
import {UsersControlComponent} from './pages/users-control/users-control.component';

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
      {path: 'cursos', component: CoursesComponent},
      {path: 'usuarios', children: [
          {path: '', component: UsersControlComponent},
          {path: 'cadastrar', component: UsersControlComponent},
          {path: 'editar', component: UsersControlComponent},
        ]},
    ]
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
