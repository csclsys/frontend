import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {

  step2formgroup: FormGroup;

  courses = ['Arquitetura', 'Biologia', 'Ciência da Computação', 'Odontologia', 'Sistemas de Informação', 'TADS'];


  constructor(
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
  ) {

    /****** Steper 2 ******/

    this.step2formgroup = this.formBuilder.group({
      courses: ['', Validators.required],
      subject: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getSubjectInfo();
  }


  async getSubjectInfo() {

    const data = await {
      courses: ['Biologia', 'Odontologia', 'Lucas'],
      subject: 'Biologia Molecular'
    };

    this.step2formgroup.patchValue({
      courses: data.courses,
      subject: data.subject
    });

  }

  /**
   * Show a notification for any CRUD action
   * @param message
   * @param action
   */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000,
    });
  }


}

