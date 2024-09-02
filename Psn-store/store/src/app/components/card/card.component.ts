import { Component, Input, OnInit } from '@angular/core';
import { CardLabelComponent } from "./card-princing/card-label/card-label.component";
import { CardPrincingComponent } from './card-princing/card-princing.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPrincingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent  implements OnInit{
	@Input()
	gameCover:string = ""
	@Input()
	gameLabel:string=""
	@Input()
	gameType:string ="XPTO | PS4"
	@Input()
	gamePrice:string = "R$ 399,90"

  ngOnInit(): void {

  }
}
