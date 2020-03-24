import { User } from './../../_models/user';
import {NgxPaginationModule} from 'ngx-pagination';
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
  collection = [];
  title = 'utilisateur';

  constructor(private userService:UserService) { 
    for(let i=1;i<=20;i++){
      let Obj = {'username': `Username ${i}`,'password': `Password ${i}`}
      this.collection.push(Obj);
    }
  }

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
        alert(data.username+" a été modifié avec succès");
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

      AfficheImage(user){
        if(user.image){
          return this.userService.Image(user);
        }else{
          return null;
        }
        
      }

      deleteUser(id){
        this.userService.delete(id).subscribe(() => {
            this.users=this.users.filter(user=>user.id != id)
        })
      }
 
}

