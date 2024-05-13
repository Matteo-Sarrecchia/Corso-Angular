import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrl: './figlio.component.css'
})
export class FiglioComponent {
  @Input() valorePadre: any;
}
