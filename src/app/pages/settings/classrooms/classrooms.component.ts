import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.css']
})
export class ClassroomsComponent implements OnInit {

  subjectsFake = [
    {
      id: 1,
      classroom: '2019/1',
      classnumb: '1',
      subject: 'Analise e Projeto de Sistemas I',
      courses: ['Ciência da Computação']
    },
    {
      id: 2,
      classroom: '2019/1',
      classnumb: '2',
      subject: 'Analise e Projeto de Sistemas I',
      courses: ['Sistema de Informação', 'TADS']
    },
    {
      id: 3,
      classroom: '2019/1',
      classnumb: '1',
      subject: 'Complexidade de Algorítimos',
      courses: ['Ciência da Computação']
    },
    {
      id: 4,
      classroom: '2019/1',
      classnumb: '1',
      subject: 'Engenharia de Requisitos',
      courses: ['Sistema de Informação']
    },
  ];

  displayedColumns: string[] = ['id', 'classroom', 'classnumb', 'subject', 'courses', 'star'];
  dataSource = new MatTableDataSource();
  // @ts-ignore
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor() {
  }

  ngOnInit() {
    this.dataSource.data = this.subjectsFake;
    this.dataSource.paginator = this.paginator;

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
