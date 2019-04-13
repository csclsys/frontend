import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.css']
})
export class AddClassroomComponent implements OnInit {

  step2formgroup: FormGroup;
  students: FormArray; /*TODO: implementar*/

  courses = ['Arquitetura', 'Biologia', 'Ciência da Computação', 'Odontologia', 'Sistemas de Informação', 'TADS'];
  subjects = [
    {
      id: '1',
      title: 'Complexidade de Algoritmos'
    },
    {
      id: '2',
      title: 'Estrutura de Dados'
    },
    {
      id: '3',
      title: 'Linguagens de programação II'
    },
    {
      id: '4',
      title: 'Calculo III'
    },
    {
      id: '5',
      title: 'Física III'
    }
  ];


  constructor(
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
  ) {

    /****** Steper 2 ******/

    this.step2formgroup = this.formBuilder.group({
      id: [''],
      classroom: ['2019/1', Validators.required],
      classnumb: ['1', Validators.required],
      courses: ['', Validators.required],
      subject: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.step2formgroup.controls.classroom.disable();
    this.step2formgroup.controls.classnumb.disable();


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
