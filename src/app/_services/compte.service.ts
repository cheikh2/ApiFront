import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compte } from '../_models/compte';

@Injectable({ providedIn: 'root' })
export class CompteService {

  constructor(private http: HttpClient) { }

  getComptes(){
    return this.http.get<Compte[]>(`${environment.apiUrl}/api/comptes`);

  }

  getNinea(ninea){
    return this.http.get<Compte[]>(`${environment.apiUrl}/api/comptes?partenaire.ninea=${ninea}`);

  }

  postCompte(compte:Compte){
    console.log(environment.apiUrl);
    return this.http.post<Compte>(`${environment.apiUrl}/api/comptes`,compte);
  }
  
}
