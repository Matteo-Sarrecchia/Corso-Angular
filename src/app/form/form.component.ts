import { Component, NgModule } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
persona:User=new User
fg:FormGroup;

constructor(){
  this.fg=new FormGroup({
    nome:new FormControl(),
    cognome:new FormControl(),
    eta:new FormControl(),

  })
}

invia(persona:User){
  console.log(persona.nome)
  console.log(persona.cognome)
  console.log(persona.eta)
}

leggi(x:any){
  console.log(x);
}
}
