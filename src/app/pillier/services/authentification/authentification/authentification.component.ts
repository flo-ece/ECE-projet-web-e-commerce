import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { UserStockageComponent } from '../../stockage/user-stockage/user-stockage.component';

const BASIC_URL = 'http://localhost:8080/';
export const AUTH_HEADER = 'authorization';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationComponent {
  constructor(private http: HttpClient, private userstockageComponent : UserStockageComponent) {}
  registerClient(signupRequestDTO:any): Observable<any>{
    return this.http.post(BASIC_URL + "inscription-client/sign-up", signupRequestDTO);
  }

  registerCompany(signupRequestDTO:any): Observable<any>{
    return this.http.post(BASIC_URL + "company/sign-up", signupRequestDTO);
  }

  login(username:string, password:string){
    return this.http.post(BASIC_URL + "authenticate", {username, password},
    {observe:'response'}).pipe(
      map((res:HttpResponse<any>)=>{
        console.log(res.body)
        //this.userstockageComponent.saveUser(res.body);
        const tokenLength = res.headers.get(AUTH_HEADER)?.length;
        const bearerToken = res.headers.get(AUTH_HEADER)?.substring(7, tokenLength);
        console.log(bearerToken);
        //this.userstockageComponent.saveToken(bearerToken);
        return res;
      })
    );
  }
}
