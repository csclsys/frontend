import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {AddEditThemeComponent} from './add-edit-theme/add-edit-theme.component';
import {ApiService} from '../../services/api.service';
import {DialogoService} from '../../services/dialog/dialogo.service';
import {UsersModel} from '../settings/users-control/users.model';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public api: ApiService,
    public dialogo: DialogoService
  ) {
  }

  dataSource;

  temasSelecionados: any[] = [];

  usuarios: any[] = [];


  displayedColumns: string[] = ['id', 'tema', 'proponente', 'situacao'];
  // @ts-ignore
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    this.buscarUsuarios();
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddEditThemeComponent, {
      disableClose: true,
      width: '500px',
      data: {type: 'add'}
    });

    dialogRef.afterClosed().subscribe(result => {
      const {tema, sitacao} = result;
      this.cadastrarTema(tema, sitacao);
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(AddEditThemeComponent, {
      disableClose: true,
      width: '500px',
      data: {type: 'edit'}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
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

        this.dataSource = new MatTableDataSource(this.temasSelecionados);
      },
      error => {

      }
    );
  }

  cadastrarTema(tema: string, situacao: boolean) {
    this.api.post('temas', {
      nome: tema,
      situacao: situacao ? 'aprovado' : 'pendente',
      disciplinaId: JSON.parse(localStorage.getItem('@discite:currentSubject')).disciplinaId,
      proponenteId: JSON.parse(localStorage.getItem('usuario')).id
    }).subscribe(res => {
      this.dialogo.abrirDialogoComum('sccs', 'Tema cadastrado com sucesso!');

      this.ngOnInit();

    });

  }

}
