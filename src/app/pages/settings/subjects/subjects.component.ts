import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {ApiService} from "../../../services/api.service";

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
  constructor(private api: ApiService ) {}

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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
