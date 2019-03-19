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
      id: '1',
      imgPath: '../../../assets/img/forum/1.jpg',
      title: 'Teoria da Computação'
    },
    {
      id: '2',
      imgPath: '../../../assets/img/forum/2.jpg',
      title: 'Complexidade de Algoritmos'
    },
    {
      id: '3',
      imgPath: '../../../assets/img/forum/3.jpg',
      title: 'Matemática Discreta'
    },
    {
      id: '4',
      imgPath: '../../../assets/img/forum/4.jpg',
      title: 'Estrutura de Dados'
    },
    {
      id: '5',
      imgPath: '../../../assets/img/forum/5.jpg',
      title: 'CSCL'
    },
    {
      id: '6',
      imgPath: '../../../assets/img/forum/6.jpg',
      title: 'Filosofia'
    },
    {
      id: '7',
      imgPath: '../../../assets/img/forum/7.jpg',
      title: 'Calculo I'
    },
    {
      id: '8',
      imgPath: '../../../assets/img/forum/8.jpg',
      title: 'Calculo II'
    },
    {
      id: '9',
      imgPath: '../../../assets/img/forum/9.jpg',
      title: 'Calculo III'
    },
    {
      id: '10',
      imgPath: '../../../assets/img/forum/10.jpg',
      title: 'Calculo Numérico'
    },
    {
      id: '11',
      imgPath: '../../../assets/img/forum/11.jpg',
      title: 'Compiladores'
    },
    {
      id: '12',
      imgPath: '../../../assets/img/forum/12.jpg',
      title: 'Sociologia'
    },
    {
      id: '13',
      imgPath: '../../../assets/img/forum/13.jpg',
      title: 'Física IV'
    }
  ];




  constructor() { }

  ngOnInit() {
  }

}
