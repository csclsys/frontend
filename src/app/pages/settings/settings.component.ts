import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: []
})
export class SettingsComponent implements OnInit {

  settings = [
    {icon: 'fas fa-users', color: '#6ab04c', title: 'Usuários', desc: '', route: '/usuarios'},
    {icon: 'fas fa-layer-group', color: '#22a6b3', title: 'Cursos', desc: '', route: '/cursos'},
    {icon: 'fas fa-book', color: '#30336b', title: 'Disciplinas', desc: '', route: '/disciplinas'},
    {icon: 'fas fa-chalkboard-teacher', color: '#be2edd', title: 'Turmas', desc: '', route: '/turmas'},
    {icon: 'fas fa-user', color: '#dd5360', title: 'Alunos', desc: '', route: '/alunos'},
    {icon: 'fas fa-user-tie', color: '#ddcb1e', title: 'Monitores', desc: '', route: '/monitores'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
