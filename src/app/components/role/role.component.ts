import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/_services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  roles;
  constructor(private roleService:RoleService) { }

  ngOnInit() {
  }

   onRoles(){
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
}