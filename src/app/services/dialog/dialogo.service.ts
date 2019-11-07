import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DialogoService {

  constructor(public dialog: MatDialog) {
  }

  abrirDialogoComum(type: 'sccs' | 'erro' | 'info' , info: string) {
    const dialogRef = this.dialog.open(DialogoComumComponent, {
      data: {type, info}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

interface DialogData {
  type: 'sccs' | 'erro' | 'info';
  info: string;
}

@Component({
  selector: 'app-dialogo-simples',
  templateUrl: './dialogo-comum.component.html',
})
export class DialogoComumComponent implements OnInit {



  constructor(
    public dialogRef: MatDialogRef<DialogoComumComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

  }

}
