import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStockageComponent } from '../../pillier/services/stockage/user-stockage/user-stockage.component';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080/";


@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http: HttpClient) { }

  postAd(adDTO:any): Observable<any>{
    const userId = UserStockageComponent.getUserId();
    return this.http.post(BASIC_URL + `api/entreprise/entreprise-annonces/${userId}`, adDTO, {
      headers : this.createAuthorizationHeader()
    })
  }

  createAuthorizationHeader() : HttpHeaders{
    let authHeaders : HttpHeaders = new HttpHeaders();
    return authHeaders.set('Authorization', 'Bearer' + UserStockageComponent.getToken())
  }
}
