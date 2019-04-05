import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatPaginator, MatSnackBar, MatStepper, MatTableDataSource} from '@angular/material';
import {CepService} from '../../services/cep.service';

@Component({
  selector: 'app-register',
  templateUrl: './users-control.component.html',
  styleUrls: ['./users-control.component.css']
})
export class UsersControlComponent implements OnInit {

  usersFake = [
    {id: 1, name: 'João das Couve', profile: 'Adminstrador'},
    {id: 2, name: 'Marcelo Flores', profile: 'Professor'},
    {id: 3, name: 'Rosalinda Novaes', profile: 'Professor'},
    {id: 4, name: 'Mario Cequeira', profile: 'Professor'},
  ];

  displayedColumns: string[] = ['name', 'profile', 'star'];
  dataSource = new MatTableDataSource();
  // @ts-ignore
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor() {}

  ngOnInit() {
    this.dataSource.data = this.usersFake;
    this.dataSource.paginator = this.paginator;

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
