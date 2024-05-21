import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { User } from './user';
import { TestServiceService } from './test-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  persone:User[]

  constructor(private testService:TestServiceService, private router:Router){}

  get(){
    this.testService.getAll().subscribe((User)=>{this.persone=User})
  }

  post(){
    const persona: User = { id:10, nome: 'Mario', cognome: 'Rossi', eta: '30' };
    this.testService.post(persona).subscribe()
  }

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

  // VARIABILE CHE SEGUI LE CARATTERISTICHE DEL MODELLO USER
  strutturaUser:User={
    id:1,
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

  // FUNZIONI PER CAMBIARE LE ROTTE
  goToSon(){
    this.router.navigateByUrl('/figlio')
  }

  goToSon2(){
    this.router.navigateByUrl('/figlio2')
  }
}
