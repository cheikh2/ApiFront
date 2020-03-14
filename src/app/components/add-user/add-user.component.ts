import { UserService } from './../../_services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/_services/role.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUser:FormGroup;
  roles;

  constructor(private roleService:RoleService, private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.addUser= new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      isActive: new FormControl(''),
      role: new FormControl(''),
      nomComplet: new FormControl('')
    });

    this.roleService.getRoles().subscribe(
      data=>{
        this.roles=data["hydra:member"]
        console.log(data["hydra:member"]
        )},
        error=>{
          alert('Veuillez vous authentifiez');
          console.log(error);
        }
    )
  }
  onSaveUser(data){

    console.log(this.addUser.value);
  let user ={
    username:this.addUser.value.username,
    password:this.addUser.value.password,
    role:this.addUser.value.role,
    isactive:this.addUser.value.isActive,
    nomComplet:this.addUser.value.nomComplet
  };
  this.userService.postUser(user).subscribe(
    data=>{
      console.log(data);
      localStorage.setItem("token",data.token);
      this.router.navigate(['utilisateur']);
    },
    error=>{
      console.log(error);
    }
  )

    
  }
}
