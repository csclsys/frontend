import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userInfo: UserData = {
    firstName: 'João',
    lastName: 'das Couves',
    birth: '1995-04-27T03:40:00.000Z',
    gender: 'Male',
  };

  public getName() {
    return `${this.userInfo.firstName} ${this.userInfo.lastName}`;
  }

  public getBirth() {
    return new Date(this.userInfo.birth);
  }

  public getGender() {
    return this.userInfo.gender;
  }

  constructor() { }
}

export interface UserData {
  firstName: string;
  lastName: string;
  birth: string;
  gender: string;
}
