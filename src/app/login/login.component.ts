import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ApiService} from '../services/api.service';
import {DialogoService} from '../services/dialog/dialogo.service';
import {UsersModel} from '../pages/settings/users-control/users.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private api: ApiService, public dialogo: DialogoService, public router: Router) {
  }

  cpf = new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]);

  login() {
    this.api.post('usuarios/auth', {cpf: this.cpf.value}).subscribe(
      (res: UsersModel) => {
        if (res.cpf) {
          localStorage.setItem('usuario', JSON.stringify(res));
          this.router.navigateByUrl('/dashboard');
          this.dialogo.abrirDialogoComum('sccs', `Logado com sucesso!`);

          return;
        }
        this.dialogo.abrirDialogoComum('info', `Credenciais não encontradas!`);

      },
      error => {
        this.dialogo.abrirDialogoComum('erro', `Ocorreu um erro no servidor. Tente novamente mais tarde`);

      }
    );
  };

  ngOnInit() {
    localStorage.setItem('isLoginPath', 'true');
  }

  ngOnDestroy() {
    localStorage.setItem('isLoginPath', 'false');
  }

}
