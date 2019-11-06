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
  professorId: number;
  professor? : UsersModel;
  disciplinaId: number;
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
    this.api.get('turmas')
      .pipe(
        map( (turmas:TurmaModel[]) => turmas ),
        mergeMap( turmas => from(turmas)
          .pipe(
            map( (turma: TurmaModel) => turma ),
            tap( turma => console.log(turma) ),
            concatMap( turma => this.api.get(`usuarios/${turma.professorId}`)
              .pipe(
                map( (professor:UsersModel) => professor ),
                tap( professor => turma.professor = professor ),
                map(  professor => turma )
              )
            ),
            concatMap( turma => this.api.get(`disciplinas/${turma.disciplinaId}`)
              .pipe(
                map( (disciplina:DisciplinaModel) => disciplina ),
                tap( disciplina => turma.disciplina = disciplina ),
                map( disciplina => turma )
              )
            ),
            toArray()
          )
        ),
      )
      .subscribe({
      next: (res: TurmaModel[]) => {
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
