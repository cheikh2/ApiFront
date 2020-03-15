import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/_services/compte.service';

@Component({
  selector: 'app-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrls: ['./list-compte.component.scss']
})
export class ListCompteComponent implements OnInit {
  comptes;
  constructor(private compteService:CompteService) { }

  ngOnInit() {
  }

  onComptes(){
    this.compteService.getComptes().subscribe(
      data=>{
        this.comptes=data["hydra:member"]
        console.log(data["hydra:member"]
        )},
        error=>{
         // alert('Veuillez vous authentifiez');
          console.log(error);
        }
    )

  }
  onGetDepots(com){
    console.log(com);

  }

}
