import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CompteService } from 'src/app/_services/compte.service';
import { RoleService } from 'src/app/_services/role.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {
  compte;
  roles;
  addCompte:FormGroup;
  constructor(private roleService:RoleService, private compteService:CompteService, private router:Router) { }
    
  ngOnInit() {

    this.roleService.getRoles().subscribe(
      data=>{
        this.roles=data["hydra:member"]
        console.log(data["hydra:member"]
        )},
        error=>{
          alert('Veuillez vous authentifiez');
          console.log(error);
        }
    ),

    this.addCompte= new FormGroup({
      montant: new FormControl(''),
      ninea: new FormControl(''),
      rc: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      isActive: new FormControl(''),
      role: new FormControl(''),
      nomComplet: new FormControl(''),
    });

  }
  onSaveCompte(data){

    console.log(this.addCompte.value);
    let compte={
      
        depots: [
          {
            montant:this.addCompte.value.montant
          }
        ],
        partenaire: {
          ninea:this.addCompte.value.ninea,
          rc: this.addCompte.value.rc,
          users: [
            {
              username: this.addCompte.value.username,
              password:this.addCompte.value.password,
              role:this.addCompte.value.role,
              isactive:this.addCompte.value.isActive,
              nomComplet:this.addCompte.value.nomComplet,
                        
            }
          ]
        }
      };

      this.compteService.postCompte(compte).subscribe(
        data=>{
          console.log(data);
          localStorage.setItem("token",data.token);
          this.router.navigate(['list-compte']);
        },
        error=>{
          console.log(error);
        }
      )
  }

}
