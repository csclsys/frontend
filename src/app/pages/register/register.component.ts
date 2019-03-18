import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  howMuchDidYouLike = new FormControl(10, [Validators.min(10), Validators.max(71)]);

  genderGroup = ['Masculino', 'Feminino', 'Prefiro não dizer'];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      birth: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

}
