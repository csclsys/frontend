import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {ApiService} from "../../../services/api.service";

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
  constructor(private api: ApiService ) {}

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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
