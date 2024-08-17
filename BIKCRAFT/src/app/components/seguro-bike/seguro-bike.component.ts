import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguro-bike',
  templateUrl: './seguro-bike.component.html',
  styleUrls: ['./seguro-bike.component.css']
})
export class SeguroBikeComponent implements OnInit {

  seguroBike: any = {
    imgSrc:'../../../../assets/img/fotos/seguros.jpg',
    altSrc:'Pessoa parada em cima de uma bicicleta.',
    title:'Pedale mais tranquilo com o nosso',
    description:'Inscreva-se em um dos planos do nosso seguro Bikcraft e aproveite diversos benefícios.',
    button:'Conheça Mais'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
