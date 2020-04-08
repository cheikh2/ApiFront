import { Transaction } from './../../_models/transaction';
import { TransactionService } from './../../_services/transaction.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  addTrans:FormGroup;
  transaction:Transaction;

  mode='envoi';
  retrait;
  id;
  code;
  nomCEnvoyeur;
  CNIEnvoyeur;
  telEnvoyeur;
  montant;
  montantPercu;
  nomCEnvoye;
  telEnvoye;
  CNIEnvoye;
  dateTrans;
  constructor(private transactionService:TransactionService, private router:Router) { }

  ngOnInit() {

    this.retrait=0;

    this.addTrans= new FormGroup({
      code: new FormControl(''),
      nomCEnvoyeur: new FormControl(''),
      CNIEnvoyeur: new FormControl(''),
      telEnvoyeur: new FormControl(''),
      montant: new FormControl(''),
      nomCEnvoye: new FormControl(''),
      telEnvoye: new FormControl(''),
      CNIEnvoye: new FormControl(''),
      }
    )
    this.money();
  }

  onEnvoi(){
    this.mode='envoi';
  }
  onRetrait(){
    this.mode='retrait';
  }
//###############################
    money()
          {
          this.addTrans.get('code').valueChanges.subscribe(val=>
          {
          this.transactionService.getCode(val).subscribe(
            data=>
            {
              console.log(this.transaction=data["hydra:member"]);
          if(data["hydra:member"][0])
          {
            this.addTrans.get('nomCEnvoyeur').disable();
            this.addTrans.get('CNIEnvoyeur').disable();
            this.addTrans.get('telEnvoyeur').disable();
            this.addTrans.get('montant').disable();
            this.addTrans.get('nomCEnvoye').disable();
            this.addTrans.get('telEnvoye').disable();


            this.id=(data["hydra:member"][0].id);
           // console.log(this.id);

            this.code = data["hydra:member"][0].code;
            this.nomCEnvoyeur = data["hydra:member"][0].nomCEnvoyeur;
            this.CNIEnvoyeur = data["hydra:member"][0].CNIEnvoyeur;
            this.telEnvoyeur = data["hydra:member"][0].telEnvoyeur;
            this.montant = data["hydra:member"][0].montant;
            this.montantPercu = data["hydra:member"][0].montantPercu;
            this.nomCEnvoye = data["hydra:member"][0].nomCEnvoye;
            this.telEnvoye = data["hydra:member"][0].telEnvoye;
            this.dateTrans = data["hydra:member"][0].dateTrans;

            this.retrait=1;
  
          }else{

            this.addTrans.get('nomCEnvoyeur').enable();
            this.addTrans.get('CNIEnvoyeur').enable();
            this.addTrans.get('telEnvoyeur').enable();
            this.addTrans.get('montant').enable();
            this.addTrans.get('nomCEnvoye').enable();
            this.addTrans.get('telEnvoye').enable();

            this.nomCEnvoyeur="";
            this.CNIEnvoyeur="";
            this.telEnvoyeur="";
            this.montant="";
            this.nomCEnvoye="";
            this.telEnvoye="";
            this.CNIEnvoye="";
            }
          });
        }
      );
    }

          

    onSaveTransfert(){

    const r = {} as Transaction;
     r.id=this.id;
        r.CNIEnvoye=this.addTrans.value.CNIEnvoye;
    
    if(!this.retrait){
      let re= {} as Transaction;

      re.code=this.addTrans.value.code;
      re.nomCEnvoyeur=this.addTrans.value.nomCEnvoyeur;
      re.CNIEnvoyeur=this.addTrans.value.CNIEnvoyeur;
      re.telEnvoyeur=this.addTrans.value.telEnvoyeur;
      re.montant=this.addTrans.value.montant;
      re.nomCEnvoye=this.addTrans.value.nomCEnvoye;
      re.telEnvoye=this.addTrans.value.telEnvoye;

      console.log(re);
      console.log(this.addTrans.value);

  this.transactionService.postTransfert(re).subscribe(
    data=>{
      alert("Transfert effectué avec succès");
      localStorage.setItem("token",data.token);
      this.router.navigate(['list-transaction']);
    },
    error=>{
      console.log(error);
    }
  );
  }

    else{
    this.transactionService.putTransfert(r).subscribe(
      data=>{
        alert("Retrait effectué avec succès");
      localStorage.setItem("token",data.token);
      this.router.navigate(['list-transaction']);
        },
            error=>{
              alert('Retrait echoué');
             // console.log(error);
            }
        )
      
  }
}

}
