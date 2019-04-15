import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {AddEditThemeComponent} from './add-edit-theme/add-edit-theme.component';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  themesFake = [
    {theme: 'Tema 1', active: true},
    {theme: 'Tema 2', active: true},
    {theme: 'Tema 3', active: true},
    {theme: 'Tema 4', active: true},
    {theme: 'Tema 5', active: false},
    {theme: 'Tema 6', active: false},
  ];







  displayedColumns: string[] = ['theme', 'active', 'star'];
  dataSource = new MatTableDataSource();
  // @ts-ignore
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.dataSource.data = this.themesFake;
    this.dataSource.paginator = this.paginator;

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddEditThemeComponent, {
      disableClose: true,
      width: '500px',
      data: {type: 'add'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(AddEditThemeComponent, {
      disableClose: true,
      width: '500px',
      data: {type: 'edit'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
