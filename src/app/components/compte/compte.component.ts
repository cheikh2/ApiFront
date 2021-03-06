import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CompteService } from 'src/app/_services/compte.service';
import { RoleService } from 'src/app/_services/role.service';
import { Compte } from 'src/app/_models/compte';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {
  compte;
  roles;
  addCompte:FormGroup;
  cherche;
  rc:any;
  montant:any;
  nomComplet:any;
  username:any;
  role:any;
  password:any;
  iripart:any;
  iriRole:`/api/roles/6`;
    
  constructor(private roleService:RoleService, private compteService:CompteService, private router:Router) { }
    
  ngOnInit() {
    
    this.iriRole;

    this.cherche=0;

    this.addCompte= new FormGroup({
            montant: new FormControl(''),
            ninea: new FormControl(''),
            rc: new FormControl(''),
            username: new FormControl(''),
            password: new FormControl(''),
            nomComplet: new FormControl(''),
         
    });
    this.existant();

  }
//###############
  existant()
    {
      this.addCompte.get('ninea').valueChanges.subscribe(val=>
        {
  
        this.compteService.getNinea(val).subscribe(
        data=>
        {
          console.log(this.compte=data["hydra:member"]);
          if(data["hydra:member"][0])
          {
            this.addCompte.get('username').disable();
            this.addCompte.get('password').disable();
            this.addCompte.get('rc').disable();
            this.addCompte.get('nomComplet').disable();

            
            this.iripart=(data["hydra:member"][0].partenaire['@id']);
            
  
            this.rc = data["hydra:member"][0].partenaire.rc;
            this.nomComplet = data["hydra:member"][0].partenaire.users[0].nomComplet;
            this.username = data["hydra:member"][0].partenaire.users[0].username;
            this.password = data["hydra:member"][0].partenaire.users[0].password;
  
           this.cherche=1;
  
          }else{

            this.addCompte.get('rc').enable();
            this.addCompte.get('username').enable();
            this.addCompte.get('password').enable();
            this.addCompte.get('nomComplet').enable();
          }
  
  
        })
  
          }
  
      );
  
    }
  //####################

  onSaveCompte(){
    let r= {} as Compte;
    
    r.depots=[
               {

                  montant:this.addCompte.value.montant
               }
              ],
    r.partenaire = this.iripart;
    console.log(r);

    if(!this.cherche){
    let re= {} as Compte;

      re.depots=[
                  {
                    montant:this.addCompte.value.montant
                  }
              ],
      re.partenaire={
                    ninea:this.addCompte.value.ninea,
                    rc:this.addCompte.value.rc,
                    users: [
                    {
                      username: this.addCompte.value.username,
                      password:this.addCompte.value.password,
                      role:this.addCompte.value.role,
                      nomComplet:this.addCompte.value.nomComplet,               
            }]
          };
          console.log(re);
          console.log(this.addCompte.value);
          this.compteService.postCompte(re).subscribe(
            data=>{
              alert(JSON.stringify(data));
          localStorage.setItem("token",data.token);
          this.router.navigate(['list-compte']);
            },
            error=>{
              console.log(error);
            }
          )
      
    }else{

      this.compteService.postCompte(r).subscribe(
        data=>{
          alert(JSON.stringify(data));
          localStorage.setItem("token",data.token);
          this.router.navigate(['list-compte']);
        });
    
     }
      }

     }
    