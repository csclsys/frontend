import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-edit-theme',
  templateUrl: './add-edit-theme.component.html',
  styleUrls: ['./add-edit-theme.component.css']
})
export class AddEditThemeComponent implements OnInit {

  addOrEdit = '';

  tema = new FormControl('', [Validators.required]);
  situacao = new FormControl(true);

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
