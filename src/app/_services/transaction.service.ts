import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../_models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transaction:Transaction;
  constructor(private http: HttpClient) { }

  getTrans(){
    return this.http.get<Transaction[]>(`${environment.apiUrl}/api/transactions`);
  }


  postTransfert(transaction){
    console.log(environment.apiUrl);
    return this.http.post<Transaction>(`${environment.apiUrl}/api/transactions`,transaction);
  }

 /* putTransfert(id:number, transaction): Observable<Transaction>{
    return this.http.put<Transaction>(`${environment.apiUrl}/api/transactions/${id}`,transaction);
  }*/

  getCode(code){
    return this.http.get<Transaction[]>(`${environment.apiUrl}/api/transactions?code=${code}`);
  }

   putTransfert(transaction){
    return this.http.put<Transaction>(`${environment.apiUrl}/api/transactions/${transaction.id}`,transaction);
  }
  
}
