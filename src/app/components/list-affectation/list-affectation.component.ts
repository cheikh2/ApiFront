import { AffectationService } from './../../_services/affectation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-affectation',
  templateUrl: './list-affectation.component.html',
  styleUrls: ['./list-affectation.component.scss']
})
export class ListAffectationComponent implements OnInit {
  affectations;
  constructor(private affectationService:AffectationService) { }

  ngOnInit() {
  }

  onAffectation(){
    this.affectationService.getAffectations().subscribe(
      data=>{
        this.affectations=data["hydra:member"]
        console.log(data["hydra:member"]
        )},
        error=>{
         // alert('Veuillez vous authentifiez');
          console.log(error);
        }
    )

  }

}
