import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {ApiService} from "../../../services/api.service";
import {UsersModel} from "../users-control/users.model";
import {DisciplinaModel} from "../subjects/subjects.component";
import {forkJoin, from, Observable} from "rxjs";
import {concatMap, map, mergeMap, tap, toArray} from "rxjs/operators";

export interface TurmaModel{
  id: number;
  nome: string;
  semestre: string;
  ano: string;
  usu_id: number;
  professor? : UsersModel;
  dis_id: number;
  disciplina: DisciplinaModel;
}

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.css']
})
export class ClassroomsComponent implements OnInit {
  constructor(private api: ApiService ) {}

  displayedColumns: string[] = ['id', 'nome', 'semestre', 'ano', 'professor', 'disciplina'];
  dataSource;


  ngOnInit() {
    this.api.get('cursos')
      .pipe(
        map( (turmas:TurmaModel[]) => turmas ),
        mergeMap( turmass => from(turmass)
          .pipe(
            map( (turma: TurmaModel) => turma ),
            concatMap( turmaa => this.api.get('usuario', {id : turmaa.usu_id})
              .pipe(
                map( (professor:UsersModel) => professor ),
                tap( professorr => turmaa.professor = professorr )
              )
            ),
            toArray()
          )
        ),
      )
      .subscribe({
      next: res => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
      },
      error: err => console.log(err)
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
