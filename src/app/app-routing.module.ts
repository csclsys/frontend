import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavComponent} from './pages/nav/nav.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ForumComponent} from './pages/forum/forum.component';
import {CoursesComponent} from './pages/courses/courses.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: '', children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'forum', component: ForumComponent},
      {path: 'cursos', component: CoursesComponent},
    ]
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
