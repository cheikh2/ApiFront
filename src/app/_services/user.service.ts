import { User } from './../_models/user';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';



@Injectable({ providedIn: 'root' })
export class UserService {
    user:User;
    constructor(private http: HttpClient, private sanitizer : DomSanitizer) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/api/users`);
    }

    postUser(user){
        console.log(environment.apiUrl);
        return this.http.post<User>(`${environment.apiUrl}/api/users`,user);
      }

      delete(id){
        return this.http.delete<User>(`${environment.apiUrl}/api/users/${id}`);
     
       }

      getStatus(user){
        return this.http.put<User>(`${environment.apiUrl}/api/bloqueUser/${user.id}`,user);
     
       }

      Image(user){
          return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64,${user.image}`)
      }
}