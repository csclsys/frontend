import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ForumModel, ForumTalk} from '../forum.model';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-forum-section',
  templateUrl: './forum-section.component.html',
  styleUrls: ['./forum-section.component.css']
})
export class ForumSectionComponent implements OnInit {

  id;
  selectedForum;

  foruns: ForumModel[] = [
    {
      id: '1',
      imgPath: '../../../../assets/img/forum/1.jpg',
      title: 'Teoria da Computação'
    },
    {
      id: '2',
      imgPath: '../../../../assets/img/forum/2.jpg',
      title: 'Complexidade de Algoritmos'
    },
    {
      id: '3',
      imgPath: '../../../../assets/img/forum/3.jpg',
      title: 'Matemática Discreta'
    },
    {
      id: '4',
      imgPath: '../../../../assets/img/forum/4.jpg',
      title: 'Estrutura de Dados'
    },
    {
      id: '5',
      imgPath: '../../../../assets/img/forum/5.jpg',
      title: 'CSCL'
    },
    {
      id: '6',
      imgPath: '../../../../assets/img/forum/6.jpg',
      title: 'Filosofia'
    },
    {
      id: '7',
      imgPath: '../../../../assets/img/forum/7.jpg',
      title: 'Calculo I'
    },
    {
      id: '8',
      imgPath: '../../../../assets/img/forum/8.jpg',
      title: 'Calculo II'
    },
    {
      id: '9',
      imgPath: '../../../../assets/img/forum/9.jpg',
      title: 'Calculo III'
    },
    {
      id: '10',
      imgPath: '../../../../assets/img/forum/10.jpg',
      title: 'Calculo Numérico'
    },
    {
      id: '11',
      imgPath: '../../../../assets/img/forum/11.jpg',
      title: 'Compiladores'
    },
    {
      id: '12',
      imgPath: '../../../../assets/img/forum/12.jpg',
      title: 'Sociologia'
    },
    {
      id: '13',
      imgPath: '../../../../assets/img/forum/13.jpg',
      title: 'Física IV'
    }
  ];

  forunsTalks: ForumTalk[] = [
    {
      id: 0,
      title: 'Qual a diferença entre algortimos polinomiais e recussivos?',
      replies: 1,
      views: 101,
      tag: 'Tema 1',
    },
    {
      id: 1,
      title: 'Em que casos eu posso usar o método "Dividir para conquistar" para resolver meus problemas com o menor custo?',
      replies: 0,
      views: 27,
      tag: 'Tema 2',
    },
  ];
  forumSectionTalkCtr = new FormControl('', [Validators.required]);

  forumSectionTags = ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4'];
  forumSectionTagsCtr = new FormControl('', [Validators.required]);

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    /*    this.route.queryParams
          .subscribe(
            (queryParams: any) => {
              this.id = queryParams.id;
              console.log(this.id);
            }
          );*/

    /*this.foruns.forEach(item => {
      if (item.id === this.id) {
        this.selectedForum = item;
        return;
      }
    });

    console.log(this.selectedForum);*/


    this.selectedForum = {
      id: '1',
      title: JSON.parse(localStorage.getItem('@discite:currentSubject')).disciplina
    };

  }

  addTalk() {
    this.forunsTalks.unshift({
      id: this.forunsTalks.length - 1,
      title: this.forumSectionTalkCtr.value,
      replies: 0,
      views: 0,
      // @ts-ignore
      tag: this.forumSectionTagsCtr.value,
    });

    this.forumSectionTagsCtr.patchValue('');
    this.forumSectionTalkCtr.patchValue('');

  }

}
