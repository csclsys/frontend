import { Component, OnInit } from '@angular/core';
import {ForumTalk} from '../../forum.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-forum-talk',
  templateUrl: './forum-talk.component.html',
  styleUrls: ['./forum-talk.component.css']
})
export class ForumTalkComponent implements OnInit {

  id;

  forunsTalks: ForumTalk[] = [
    {
      id: 0,
      title: 'Qual a diferença entre algortimos polinomiais e recussivos?',
      votes: 12,
      replies: 1,
      views: 101,
      tags: ['algoritmo', 'recussividade', 'matemática'],
    },
    {
      id: 1,
      title: 'Em que casos eu posso usar o método "Dividir para conquistar" para resolver meus problemas com o menor custo?',
      votes: 3,
      replies: 0,
      views: 27,
      tags: ['algoritmo', 'recussividade', 'matemática', 'custo'],
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(
        (queryParams: any) => {
          this.id = queryParams.id;
          console.log(this.id);
        }
      );
  }

}
