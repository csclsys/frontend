import { Component, OnInit } from '@angular/core';
import {UsersModel} from '../settings/users-control/users.model';
import {MatTableDataSource} from '@angular/material';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  constructor(
    private api: ApiService
  ) {}


  temasSelecionados: any[] = [];

  usuarios: any[] = [];


  ngOnInit() {
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.api.get('usuarios').subscribe({
      next: (res: UsersModel[]) => {
        console.log(res);
        this.usuarios = res;
        this.buscarTemas();
      },
      error: err => console.log(err)
    });
  }

  buscarTemas() {
    this.api.get('temas').subscribe(
      (res: any) => {
        console.log(res);

        for (const tema of res) {
          const disc = JSON.parse(localStorage.getItem('@discite:currentSubject')).disciplinaId;
          if (tema.disciplinaId === disc) {

            const {nome, sobrenome} = this.usuarios[this.usuarios.findIndex(x => x.id === tema.proponenteId)];

            this.temasSelecionados.push({
              ...tema,
              nomeProponente: `${nome} ${sobrenome}`
            });
          }
        }

        console.log(this.temasSelecionados);

      },
      error => {

      }
    );
  }

}
