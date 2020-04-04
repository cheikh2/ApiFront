import { UserService } from './../../_services/user.service';
import { AffectationService } from './../../_services/affectation.service';
import { CompteService } from './../../_services/compte.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.scss']
})
export class AffectationComponent implements OnInit {
  addAffectation:FormGroup;
  users;
  comptes;
  
  constructor(private userService:UserService, private affectationService:AffectationService, 
    private compteService:CompteService, private router:Router) { }

  ngOnInit() {
    this.addAffectation= new FormGroup({
      dateAffectation: new FormControl(''),
      dateExpiration: new FormControl(''),
      user: new FormControl(''),
      compte: new FormControl(''),

    });

    this.userService.getAll().subscribe(
      data=>{
        this.users=data["hydra:member"]
        /*console.log(data["hydra:member"]
        )},
        error=>{
          alert('Veuillez vous authentifiez');
          console.log(error);*/
        }
    );

    this.compteService.getComptes().subscribe(
      data=>{
        this.comptes=data["hydra:member"]
        console.log(data["hydra:member"]
        )},
        error=>{
          alert('Veuillez vous authentifiez');
          console.log(error);
        }
    )
      }
      onSaveAffect(data){

      console.log(this.addAffectation.value);
      const affectation ={
        dateAffectation:this.addAffectation.value.dateAffectation,
        dateExpiration:this.addAffectation.value.dateExpiration,
        user:`api/users/${this.addAffectation.value.user}`,
        compte:`api/comptes/${this.addAffectation.value.compte}`
      };
      
      this.affectationService.postAffectation(affectation).subscribe(
        data=>{
          alert(JSON.stringify(data));
          localStorage.setItem("token",data.token);
          this.router.navigate(['list-affectation']);
        },
        error=>{
          console.log(error);
        }
      )
      }
  
  }
  