import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './pages/nav/nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForumComponent } from './pages/forum/forum.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ForumSectionComponent } from './pages/forum/forum-section/forum-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    ForumComponent,
    CoursesComponent,
    ForumSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
