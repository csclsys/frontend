import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {ApiService} from '../../../services/api.service';
import {UsersModel} from './users.model';
import {DialogoService} from '../../../services/dialog/dialogo.service';

@Component({
  selector: 'app-register',
  templateUrl: './users-control.component.html',
  styleUrls: ['./users-control.component.css']
})
export class UsersControlComponent implements OnInit {
  constructor(private api: ApiService, public dialogo: DialogoService) {
  }

  displayedColumns: string[] = ['id', 'nome', 'matricula', 'cpf', 'papel'];
  dataSource;

  ngOnInit() {
    this.api.get('usuarios').subscribe({
      next: (res: UsersModel[]) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
      },
      error: err => console.log(err)
    });
  }

  importarTodosUsuarios() {

    this.api.post('usuarios/importarUsuarios', {})
      .subscribe((result: any[]) => {
        this.dialogo.abrirDialogoComum('sccs', `${result.length} usuário(s) importado(s) com sucesso!`);

        this.ngOnInit();

      }, error => {
        this.dialogo.abrirDialogoComum('erro', 'Ocorreu um erro na sua solicitação, por favor, tente mais tarde!');
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
