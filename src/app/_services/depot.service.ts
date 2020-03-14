import { Depot } from './../_models/depot';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private http: HttpClient) { }

  getDepots(){
    return this.http.get<Depot[]>(`${environment.apiUrl}/api/depots`);
  }

  postDepot(depot:Depot){
    console.log(environment.apiUrl);
    return this.http.post<Depot>(`${environment.apiUrl}/api/depots`,depot);
  }
}
