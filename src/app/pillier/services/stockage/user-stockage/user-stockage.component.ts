import { Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const TOKEN = 's_token';
const USER = 's_user';
const filename = typeof __filename !== 'undefined' ? __filename : './my-local-storage';

const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage(filename);
localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');
localStorage.removeItem('key');
localStorage.clear();

@Injectable({
  providedIn: 'root'
})

export class UserStockageComponent {
  constructor() {}
  
  public saveToken(token : string) : void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  static getToken() : string {
    return localStorage.getItem(TOKEN);
  }

  public saveUser(user) : void{
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }
  
  static getUser() : any {
    return JSON.parse(localStorage.getItem(USER));
  }

  static getUserId() : string {
    const usr = this.getUser();
    if (usr === null){
      return '';
    }
    return usr.userId;
  }

  static getUserRole() : string {
    const usr = this.getUser();
    if (usr === null){
      return '';
    }
    return usr.role;
  }

  static isClientLogIn(): boolean {
    if (this.getToken === null) {
      return false;
    }
    const role : string = this.getUserRole();
    return role == 'CLIENT';
  }

  static isCompanyLogIn(): boolean {
    if (this.getToken === null) {
      return false;
    }
    const role : string = this.getUserRole();
    return role == 'COMPANY';
  }

  static signOut() : void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }
}