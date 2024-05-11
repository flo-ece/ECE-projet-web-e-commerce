import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:4200/';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.scss'
})
export class AuthentificationComponent {
  constructor(private http: HttpClient,) {}
  registerClient(signupRequestDTO:any): Observable<any>{
    return this.http.post(BASIC_URL + "client/sign-up", signupRequestDTO);
  }

  registerCompany(signupRequestDTO:any): Observable<any>{
    return this.http.post(BASIC_URL + "company/sign-up", signupRequestDTO);
  }
}
