import {Injectable} from '@angular/core';
import {UsersModel} from '../pages/settings/users-control/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userInfoFake: UserData = {
    firstName: '-',
    lastName: '-',
    birth: '1995-04-27T03:40:00.000Z',
    gender: 'Male',
  };

  public getName() {

    if (localStorage.getItem('usuario')) {
      const {nome, sobrenome}: UsersModel = JSON.parse(localStorage.getItem('usuario'));
      return `${nome} ${sobrenome}`;
    }

    return `${this.userInfoFake.firstName} ${this.userInfoFake.lastName}`;
  }

  public getBirth() {
    return new Date(this.userInfoFake.birth);
  }

  public getGender() {
    return this.userInfoFake.gender;
  }

  constructor() {
  }
}

export interface UserData {
  firstName: string;
  lastName: string;
  birth: string;
  gender: string;
}
