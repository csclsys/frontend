import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjectsFake = [
    {id: 1, subject: 'Analise e Projeto de Sistemas I', courses: ['Ciência da Computação', 'Sistema de Informação']},
    {id: 2, subject: 'Analise e Projeto de Sistemas II', courses: ['Ciência da Computação', 'Sistema de Informação']},
    {id: 3, subject: 'Complexidade de Algorítimos', courses: ['Ciência da Computação']},
    {id: 4, subject: 'Engenharia de Requisitos', courses: ['Sistema de Informação']},
    ];

  displayedColumns: string[] = ['subject', 'courses', 'star'];
  dataSource = new MatTableDataSource();
  // @ts-ignore
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor() {}

  ngOnInit() {
    this.dataSource.data = this.subjectsFake;
    this.dataSource.paginator = this.paginator;

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
