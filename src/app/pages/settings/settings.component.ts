import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: []
})
export class SettingsComponent implements OnInit {

  settings = [
    {icon: 'people', title: 'Usuários', desc: '', route: '/usuarios'},
    {icon: 'book', title: 'Cursos', desc: '', route: '/cursos'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
