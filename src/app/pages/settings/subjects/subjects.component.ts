import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {ApiService} from "../../../services/api.service";
import {DialogoService} from '../../../services/dialog/dialogo.service';

export interface DisciplinaModel {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  constructor(private api: ApiService, public dialogo: DialogoService ) {}

  displayedColumns: string[] = ['id', 'nome'];
  dataSource;

  ngOnInit() {
    this.api.get('disciplinas').subscribe({
      next: (res: DisciplinaModel[]) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
      },
      error: err => console.log(err)
    });

  }

  importarTodasDisciplinas() {

    this.api.post('disciplinas/importarDisciplinas', {})
      .subscribe((result: any[]) => {
        this.dialogo.abrirDialogoComum('sccs', `${result.length} disciplinas(s) importado(s) com sucesso!`);

        setTimeout(() => {
          window.location.reload();
        }, 3000);

      }, error => {
        this.dialogo.abrirDialogoComum('erro', 'Ocorreu um erro na sua solicitação, por favor, tente mais tarde!');
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
