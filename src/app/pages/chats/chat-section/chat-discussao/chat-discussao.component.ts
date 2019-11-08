import {Component, HostListener, OnInit} from '@angular/core';
import {ApiService} from '../../../../services/api.service';
import {DialogoService} from '../../../../services/dialog/dialogo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-chat-discussao',
  templateUrl: './chat-discussao.component.html',
  styleUrls: ['./chat-discussao.component.css']
})
export class ChatDiscussaoComponent implements OnInit {
  constructor(
    private api: ApiService,
    public dialogo: DialogoService,
    public router: Router,
    public route: ActivatedRoute
  ) {

  }

  innerHeight = 0;

  idUsuarioAtual = JSON.parse(localStorage.getItem('usuario')).id || 0;

  idSala;

  infoSala = {};

  chats = [
    {
      id: 0,
      autorInfo: {
        id: 4,
        nome: 'Marcos',
        sobrenome: 'Oliveira',
        cpf: '00000000004',
        matricula: '16451214',
        papel: 'aluno'
      },
      horarioResposta: '2019-08-19T22:48:55.000Z',
      texto: 'Teste resposta 1',
      salaId: 0,
      comentarios: [
        {
          id: 1,
          autorInfo: {
            id: 4,
            nome: 'Marcos',
            sobrenome: 'Oliveira',
            cpf: '00000000004',
            matricula: '16451214',
            papel: 'aluno'
          },
          horarioResposta: '2019-08-19T22:48:55.000Z',
          texto: 'Teste comentario 1',
          salaId: 0,
          comentarioId: 0
        }
      ]
    },
    {
      id: 2,
      autorInfo: {
        id: 3,
        nome: 'Lucas',
        sobrenome: 'Rodrigues',
        cpf: '00000000003',
        matricula: '16451215',
        papel: 'aluno'
      },
      horarioResposta: '2019-08-19T22:48:55.000Z',
      texto: 'Teste resposta 2',
      salaId: 0,
      comentarios: [
        {
          id: 4,
          autorInfo: {
            id: 1,
            nome: 'Marcos',
            sobrenome: 'Oliveira',
            cpf: '00000000004',
            matricula: '16451214',
            papel: 'aluno'
          },
          horarioResposta: '2019-08-19T22:48:55.000Z',
          texto: 'Teste comentário 2',
          salaId: 0,
          comentarioId: 2
        }
      ]
    }
  ];


  ngOnInit(): void {
    this.innerHeight = window.innerHeight - 220;

    this.route.queryParams.subscribe(result => {
      this.idSala = result.idSala;
    });

    this.buscarSala();

  }

  buscarSala() {
    this.api.get(`salas/${this.idSala}`).subscribe(
      result => {
        this.infoSala = result;
      }
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight - 220;
    console.log(this.innerHeight);
  }
}
