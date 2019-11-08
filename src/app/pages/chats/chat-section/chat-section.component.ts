import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {DialogoService} from '../../../services/dialog/dialogo.service';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersModel} from '../../settings/users-control/users.model';
import {AddEditThemeComponent} from '../../themes/add-edit-theme/add-edit-theme.component';
import {AddChatComponent} from './add-chat/add-chat.component';

@Component({
  selector: 'app-chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.css']
})
export class ChatSectionComponent implements OnInit {
  constructor(
    private api: ApiService,
    public dialogo: DialogoService,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog
  ) {
  }

  displayedColumns: string[] = ['id', 'desc', 'autor', 'dataCriacao', 'botoes'];
  dataSource;
  tema;
  salas = [];
  usuarios = [];
  temasSelecionados = [];
  temaSelecionado = '';


  ngOnInit() {

    this.buscarUsuarios();

    this.route.queryParams.subscribe(result => {
      this.tema = result.tema;
      console.log(this.tema);
    });

    this.api.get('salas').subscribe({
      next: (res: any) => {
        console.log(res);
        this.salas = res;
        this.organizaSalas();
      },
      error: err => console.log(err)
    });
  }

  organizaSalas() {
    const temp = [];
    for (const sala of this.salas) {
      const {nome, sobrenome} = this.usuarios[this.usuarios.findIndex(x => x.id === sala.usuarioId)];
      if (sala.temaId === +this.tema) {
        temp.push({...sala, autor: `${nome} ${sobrenome}`});
      }
    }

    console.warn(this.tema);
    console.warn(temp);


    this.dataSource = new MatTableDataSource(temp);

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

        this.temasSelecionados = res;
        console.log(this.temasSelecionados);

        this.temaSelecionado = this.temasSelecionados[this.temasSelecionados.findIndex(x => x.id === +this.tema)].nome;


      },
      error => {

      }
    );
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddChatComponent, {
      disableClose: true,
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      const { descrPergunta } = result;
      this.cadastrarChat(descrPergunta);
    });
  }

  cadastrarChat(descricao: string) {
    this.api.post('salas', {
      descrPergunta: descricao,
      tipo: 'sincrona',
      temaId: +this.tema,
      usuarioId: JSON.parse(localStorage.getItem('usuario')).id,
      dataAbertura: new Date().toISOString(),
    }).subscribe(res => {
      this.dialogo.abrirDialogoComum('sccs', 'Tema cadastrado com sucesso!');

      this.ngOnInit();

    });

  }

}
