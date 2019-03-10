import { Component, OnInit } from '@angular/core';
import {ForumModel} from './forum.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  foruns: ForumModel[] = [
    {
      imgPath: '../../../assets/img/forum/1.jpg',
      title: 'Teoria da Computação'
    },
    {
      imgPath: '../../../assets/img/forum/2.jpg',
      title: 'Complexidade de Algoritmos'
    },
    {
      imgPath: '../../../assets/img/forum/3.jpg',
      title: 'Matemática Discreta'
    },
    {
      imgPath: '../../../assets/img/forum/4.jpg',
      title: 'Estrutura de Dados'
    },
    {
      imgPath: '../../../assets/img/forum/5.jpg',
      title: 'CSCL'
    },
    {
      imgPath: '../../../assets/img/forum/6.jpg',
      title: 'Filosofia'
    },
    {
      imgPath: '../../../assets/img/forum/7.jpg',
      title: 'Calculo I'
    },
    {
      imgPath: '../../../assets/img/forum/8.jpg',
      title: 'Calculo II'
    },
    {
      imgPath: '../../../assets/img/forum/9.jpg',
      title: 'Calculo III'
    },
    {
      imgPath: '../../../assets/img/forum/10.jpg',
      title: 'Calculo Numérico'
    },
    {
      imgPath: '../../../assets/img/forum/11.jpg',
      title: 'Compiladores'
    },
    {
      imgPath: '../../../assets/img/forum/12.jpg',
      title: 'Sociologia'
    },
    {
      imgPath: '../../../assets/img/forum/13.jpg',
      title: 'Física IV'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
