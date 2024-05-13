import { Component, EventEmitter, Output, output, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-figlio2',
  templateUrl: './figlio2.component.html',
  styleUrl: './figlio2.component.css'
})
export class Figlio2Component {
 numero:number=10;

@Output() evento=new EventEmitter<number>();


constructor(private testService:TestServiceService){}

emetti(){
    this.evento.emit(this.numero)
}

ngOnInit(){
  console.log(this.testService.addizione());
}


}
