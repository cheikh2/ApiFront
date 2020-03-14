import { User } from './../../_models/user';
import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  users;
  user:User;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.onUser();
  }
  onUser(){
    this.userService.getAll().subscribe(
      data=>{
        this.users=data["hydra:member"]
        //console.log(data["hydra:member"]
    }  ,
        error=>{
          alert('Veuillez vous authentifiez');
         // console.log(error);
        }
    )
  }

  onActive(u){
    
    this.userService.getStatus(u).subscribe(
      data=>{
        alert(JSON.stringify(data));
        this.userService.getAll().subscribe(
          data=>{
            this.users=data["hydra:member"]
            //console.log(data["hydra:member"]
        }  ,
            error=>{
              alert('Veuillez vous authentifiez');
             // console.log(error);
            }
        )
      })
      
      }
 
}

