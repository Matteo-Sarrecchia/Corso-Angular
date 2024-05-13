import { Component } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nome = 'Matteo';
  title = 'xxx';
  eventoPreso:number;

  // VALORE BOOLEANO
  x:boolean=false;

  // ARRAY NG FOR
  lista:any=[
    {nome:'Matteo'},
    {nome:'Viola'},
    {nome:'Giada'},
  ]

  // VARIABILI NG SWITCH
  variabile=0;
  valore1=0;
  valore2=1;

  // VARIANILE CHE SEGUI LE CARATTERISTICHE DEL MODELLO USER
  strutturaUser:User={
    nome:'Matteo',
    cognome:'Sarrecchia',
    eta:'28'
  }

  prendiEvento(numeroFiglio2: number){
    this.eventoPreso=numeroFiglio2
  }

  cambiaBoolean(){
    this.x=!this.x
  }

}
