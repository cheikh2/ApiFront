import { CompteService } from './../../_services/compte.service';
import { DepotService } from 'src/app/_services/depot.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-depot',
  templateUrl: './add-depot.component.html',
  styleUrls: ['./add-depot.component.less']
})
export class AddDepotComponent implements OnInit {
  addDepot:FormGroup;
  comptes;
  constructor(private depotService:DepotService, private compteService:CompteService, private router:Router) { }

  ngOnInit() {
    this.addDepot= new FormGroup({
      montant: new FormControl(''),
      compte: new FormControl(''),

    });

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
  onSaveDepot(data){

    console.log(this.addDepot.value);
    const depot ={
      montant:this.addDepot.value.montant,
      compte:`api/comptes/${this.addDepot.value.compte}`
    };
    this.depotService.postDepot(depot).subscribe(
      data=>{
        alert("Depot effectué avec succès");
        localStorage.setItem("token",data.token);
        this.router.navigate(['list-depot']);
      },
      error=>{
        console.log(error);
      }
    )
    }

}
