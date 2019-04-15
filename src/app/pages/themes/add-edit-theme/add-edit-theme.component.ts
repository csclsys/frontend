import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-edit-theme',
  templateUrl: './add-edit-theme.component.html',
  styleUrls: ['./add-edit-theme.component.css']
})
export class AddEditThemeComponent implements OnInit {

  addOrEdit = '';

  constructor(
    public dialogRef: MatDialogRef<AddEditThemeComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

    this.addOrEdit = this.data.type;

  }

}
