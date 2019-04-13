import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesFake = [
    {id: 1, course: 'Arquitetura', knowArea: ['Ciências humanas', 'Ciências da Natureza', 'Matemática']},
    {id: 2, course: 'Biologia', knowArea: ['Ciências biológicas', 'Ciências da Natureza', 'Matemática']},
    {id: 3, course: 'Ciência da Computação', knowArea: ['Ciências da Natureza', 'Matemática', 'TI']},
    {id: 4, course: 'Odontologia', knowArea: ['Ciências biológicas', 'Ciências da Natureza', 'Saúde']},
    {id: 5, course: 'Sistemas de Informação', knowArea: ['TI']},
    {id: 5, course: 'TADS', knowArea: ['TI']},
  ];



  displayedColumns: string[] = ['course', 'knowArea', 'star'];
  dataSource = new MatTableDataSource();
  // @ts-ignore
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor() {}

  ngOnInit() {
    this.dataSource.data = this.coursesFake;
    this.dataSource.paginator = this.paginator;

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
