import { User } from './../_models/user';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/api/users`);
    }

    postUser(user:User){
        console.log(environment.apiUrl);
        return this.http.post<User>(`${environment.apiUrl}/api/users`,user);
      }

      getStatus(user:User){
        return this.http.put<User>(`${environment.apiUrl}/api/bloqueUser/${user.id}`,user);
     
       }
}