import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatPaginator, MatSnackBar, MatStepper, MatTableDataSource} from '@angular/material';
import {CepService} from '../../../services/cep.service';
import {ApiService} from "../../../services/api.service";
import {UsersModel} from "./users.model";

@Component({
  selector: 'app-register',
  templateUrl: './users-control.component.html',
  styleUrls: ['./users-control.component.css']
})
export class UsersControlComponent implements OnInit {
  constructor(private api: ApiService ) {}

  displayedColumns: string[] = ['id', 'nome', 'matricula', 'cpf' , 'papel'];
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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
