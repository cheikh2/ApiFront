import { Component, OnInit } from '@angular/core';
import { DepotService } from 'src/app/_services/depot.service';

@Component({
  selector: 'app-list-depot',
  templateUrl: './list-depot.component.html',
  styleUrls: ['./list-depot.component.scss']
})
export class ListDepotComponent implements OnInit {
depots;
  constructor(private depotService:DepotService) { }

  ngOnInit() {
  }
  onDepots(){
    this.depotService.getDepots().subscribe(
      data=>{
        this.depots=data["hydra:member"]
        console.log(data["hydra:member"]
        )},
        error=>{
          alert('Veuillez vous authentifiez');
          console.log(error);
        }
    )

}
}
