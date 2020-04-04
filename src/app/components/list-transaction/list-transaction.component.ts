import { TransactionService } from './../../_services/transaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.scss']
})
export class ListTransactionComponent implements OnInit {
  transactions;
  constructor(private transactionService:TransactionService) { }

  ngOnInit() {
  }
  onTrans(){
    this.transactionService.getTrans().subscribe(
      data=>{
        this.transactions=data["hydra:member"]
        console.log(data["hydra:member"]
        )},
        error=>{
          alert('Veuillez vous authentifiez');
          console.log(error);
        }
    )

}
}
