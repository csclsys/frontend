import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar, MatStepper} from '@angular/material';
import {CepService} from '../../services/cep.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  step1formgroup: FormGroup;
  step2formgroup: FormGroup;

  cpfValid;

  genderGroup = ['Masculino', 'Feminino', 'Prefiro não dizer'];
  maritalStatus = ['Solteiro (a)', 'Casado (a)', 'União estável, Separado (a), Divorciado (a), Viúvo (a)'];
  nacionalities = ['Brasileiro (a)', 'Naturalizado (a)', 'Estrangeiro (a)'];

  @ViewChild('stepper') stepper: MatStepper;

  constructor(
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    public cepServ: CepService
  ) {
    /****** Steper 1 ******/

    this.step1formgroup = this.formBuilder.group({
      cpf: ['', Validators.required],
      isValid: ['', Validators.required],
    });


    /****** Steper 2 ******/

    this.step2formgroup = this.formBuilder.group({
      rg: ['', Validators.required],
      nome: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      dtNasc: ['', Validators.required],
      sexo: ['', Validators.required],
      naturalidade: ['', Validators.required],
      telCtrl1: [''],
      telCtrl2: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')]],
      cep: ['', Validators.required],
      uf: ['', [Validators.required, Validators.maxLength(2)]],
      cidade: ['', Validators.required],
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      no: ['', Validators.required],
      complemento: [''],
      senha: ['', Validators.required],
      // confirmaSenha: [''],
    });
  }

  ngOnInit() {


    /**
     * CPF validator - defines the stepper 'next' control
     */
    const control = this.step1formgroup.controls.cpf;
    control.valueChanges.subscribe(value => {
      if (value.toString().length === 11) {
        if (this.checkCpf()) {
          this.step1formgroup.patchValue({
            isValid: true
          });
          this.stepper.next();
        } else {
          this.step1formgroup.patchValue({
            isValid: ''
          });
          this.openSnackBar('CPF Inválido', 'OK');
        }
      } else {
        this.step1formgroup.patchValue({
          isValid: ''
        });
      }
    });

    /**
     * CEP Search
     */
    const controlCep = this.step2formgroup.controls.cep;
    controlCep.valueChanges.subscribe(value => {
      if (value.length === 8) {
        this.cepServ.get(value)
          .subscribe(result => {
            console.log(result);
            this.step2formgroup.patchValue({
              // @ts-ignore
              uf: result.uf,
              // @ts-ignore
              logradouro: result.logradouro,
              // @ts-ignore
              cidade: result.localidade,
              // @ts-ignore
              bairro: result.bairro
            });

            // @ts-ignore
            if (result.erro) {
              this.openSnackBar('CEP não encontrado, verifique a digitação e, se não houver erros, continue manualmente.', 'Ok');
            }
          });

      }
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

  checkCpf() {
    const strCPF = this.step1formgroup.getRawValue().cpf;
    console.log('testando CPF: ' + strCPF);
    let soma;
    let resto;
    soma = 0;
    if (
      strCPF === '00000000000'
      || strCPF === '11111111111'
      || strCPF === '22222222222'
      || strCPF === '33333333333'
      || strCPF === '44444444444'
      || strCPF === '55555555555'
      || strCPF === '66666666666'
      || strCPF === '77777777777'
      || strCPF === '88888888888'
      || strCPF === '99999999999') {
      this.cpfValid = false;
      return false;
    }

    for (let i = 1; i <= 9; i++) {
      soma = soma + +(strCPF.substring(i - 1, i)) * (11 - i); // + is the new parseInt
    }
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11))  {
      resto = 0;
    }

    if (resto !== +(strCPF.substring(9, 10)) ) {
      this.cpfValid = false;
      return false;
    }

    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma = soma + +(strCPF.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
      resto = 0;
    }

    if (resto !== +(strCPF.substring(10, 11) ) ) {
      this.cpfValid = false;
      return false;
    }

    this.cpfValid = true;
    return true;
  }




}
