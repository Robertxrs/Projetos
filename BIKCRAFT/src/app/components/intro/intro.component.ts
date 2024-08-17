import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  introContent: any = {
    title:'Bicicletas feitas sob medida',
    description:'Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft.',
    button:'Escolha a sua',
    sourceSrc:'../../../assets/img/bicicletas/nimbus.jpg',
    imgSrc:'../../../assets/img/fotos/introducao.jpg',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
