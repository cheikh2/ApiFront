import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/_models/compte';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
searchResult: Compte[];
  constructor() { }

  ngOnInit() {
    this.searchResult = [];
  }
  search(chaine){
    console.log(chaine);
  }

  selectCompte(compte:Compte){
    console.log(compte);

  }

}
