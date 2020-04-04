import { Affectation } from '../_models/affectation';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  constructor(private http: HttpClient) { }

  getAffectations(){
    return this.http.get<Affectation[]>(`${environment.apiUrl}/api/affectations`);

  }

  postAffectation(affectation:Affectation){
    console.log(environment.apiUrl);
    return this.http.post<Affectation>(`${environment.apiUrl}/api/affectations`,affectation);
  }
}
