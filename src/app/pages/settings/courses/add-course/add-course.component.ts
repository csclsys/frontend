import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {CepService} from '../../../../services/cep.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  step2formgroup: FormGroup;

  knowAreas = ['Ciências humanas', 'Ciências da Natureza', 'Matemática', 'Ciências biológicas', 'TI', 'Saúde'];

  constructor(
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
  ) {

    /****** Steper 2 ******/

    this.step2formgroup = this.formBuilder.group({
      knowArea: ['', Validators.required],
      course: ['', Validators.required]
    });
  }

  ngOnInit() {



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
