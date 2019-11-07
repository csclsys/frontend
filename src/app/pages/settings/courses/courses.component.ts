import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ApiService} from '../../../services/api.service';
import {DialogoService} from '../../../services/dialog/dialogo.service';

interface CursoModel {
  id: number;
  nome: string;
}


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  constructor(private api: ApiService, public dialogo: DialogoService) {
  }

  displayedColumns: string[] = ['id', 'nome'];
  dataSource;


  ngOnInit() {
    this.api.get('cursos').subscribe({
      next: (res: CursoModel[]) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
      },
      error: err => console.log(err)
    });

  }

  importarTodosCursos() {

    this.api.post('cursos/importarCursos', {})
      .subscribe((result: any[]) => {
        this.dialogo.abrirDialogoComum('sccs', `${result.length} cursos(s) importado(s) com sucesso!`);

        this.ngOnInit();

      }, error => {
        this.dialogo.abrirDialogoComum('erro', 'Ocorreu um erro na sua solicitação, por favor, tente mais tarde!');
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
