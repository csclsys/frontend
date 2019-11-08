import {Component, HostListener, OnInit} from '@angular/core';
import {ApiService} from '../../../../services/api.service';
import {DialogoService} from '../../../../services/dialog/dialogo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersModel} from '../../../settings/users-control/users.model';
import {FormControl, Validators} from '@angular/forms';
import * as firebase from 'firebase/app';

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

  resposta = new FormControl('', [Validators.required]);

  innerHeight = 0;

  idUsuarioAtual = JSON.parse(localStorage.getItem('usuario')).id || 0;

  idSala;

  infoSala = {};

  usuarios = [];

  respostas = [];

  respostasOrganizadas = [
    {
      id: 0,
      tipo: 'texto',
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
      tipo: 'texto',
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

    this.buscarUsuarios();


    setInterval(() => {
      this.buscarRespostas();
    }, 2000);


  }

  buscarSala() {
    this.api.get(`salas/${this.idSala}`).subscribe(
      result => {
        this.infoSala = result;
      }
    );
  }

  buscarUsuarios() {
    this.api.get('usuarios').subscribe({
      next: (res: UsersModel[]) => {
        console.log(res);
        this.usuarios = res;
        this.buscarRespostas();
      },
      error: err => console.log(err)
    });
  }


  buscarRespostas() {
    this.api.get('respostaSalas/porSala', {salaId: this.idSala}).subscribe(
      (result: any) => {
        console.log(result);
        this.respostas = result;
        this.organizarRespostas();
      },
      error => {

      }
    );
  }


  async organizarRespostas() {

    this.respostasOrganizadas = [];

    for (const resposta of this.respostas) {
      const autor = await this.usuarios[this.usuarios.findIndex(x => x.id === resposta.usuarioId)];
      this.respostasOrganizadas.push(await
        {...resposta, autorInfo: autor}
      );
    }

    console.log(this.respostasOrganizadas);
  }

  publicarReposta() {
    this.api.post('respostaSalas', {
      tipo: 'texto',
      texto: this.resposta.value,
      salaId: this.idSala,
      usuarioId: this.idUsuarioAtual
    }).subscribe(
      res => {
        this.resposta.patchValue('');
      },
      error => {
        this.dialogo.abrirDialogoComum('erro', 'Houve um erro ao enviar a sua mensagem, tente novamente!');
      }
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight - 220;
    console.log(this.innerHeight);
  }

  async onFileSelected(event) {
    const file: File = event.target.files[0];
    const base64 = await this.toBase64(file);
    console.log(base64);
    this.api.post('respostaSalas', {
      tipo: 'midia',
      texto: base64,
      salaId: this.idSala,
      usuarioId: this.idUsuarioAtual
    }).subscribe(
      res => {
        this.resposta.patchValue('');
      },
      error => {
        this.dialogo.abrirDialogoComum('erro', 'Houve um erro ao enviar a sua mensagem, tente novamente!');
      }
    );

  }

  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  })

}
