import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {CURRENT_SUBJECT} from '../nav/nav.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentSubject = CURRENT_SUBJECT;

  dashQuestCards: DashQuestCards[] = [
    {
      icon: 'forum',
      iconColor: '#22a7f0',
      description: 'Questão aberta 1',
      tooltip: '',
      router: '/forum'
    },
    {
      icon: 'forum',
      iconColor: '#22a7f0',
      description: 'Questão aberta 2',
      tooltip: '',
      router: '/forum'
    },
    {
      icon: 'forum',
      iconColor: '#22a7f0',
      description: 'Questão aberta 3',
      tooltip: '',
      router: '/forum'
    },
    {
      icon: 'forum',
      iconColor: '#22a7f0',
      description: 'Questão aberta 4',
      tooltip: '',
      router: '/forum'
    },
    {
      icon: 'forum',
      iconColor: '#22a7f0',
      description: 'Questão aberta 5',
      tooltip: '',
      router: '/forum'
    },
    {
      icon: 'forum',
      iconColor: '#22a7f0',
      description: 'Questão aberta 6',
      tooltip: '',
      router: '/forum'
    },

  ];

  courseDashboardCards: CourseDashboardCards[] = [
    {
      img: '../../../assets/img/courses/js-course-bg.jpg',
      title: 'Javascript Básico',
      description: '',
      lessonsAmount: 100,
      lessonsFinished: 55,
    },
    {
      img: '../../../assets/img/courses/angular-course-bg.jpg',
      title: 'Angular 7',
      description: '',
      lessonsAmount: 126,
      lessonsFinished: 23,
    },
    {
      img: '../../../assets/img/courses/historia_brasil-course-bg.jpg',
      title: 'História do Brasil',
      description: '',
      lessonsAmount: 25,
      lessonsFinished: 24,
    },
  ];

  getCoursePercentage(amount: number, finished: number) {
    return Math.floor(100 / amount * finished);
  }

  constructor(
    public user: UserService
  ) { }

  ngOnInit() {
  }

}

export interface DashQuestCards {
  icon: string;
  iconColor: string;
  description: string;
  tooltip: string;
  router: string;
}

export interface CourseDashboardCards {
  img: string;
  title: string;
  description: string;
  lessonsAmount: number;
  lessonsFinished: number;
}
