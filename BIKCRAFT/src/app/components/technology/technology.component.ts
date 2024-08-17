import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  technologyInfo: any = {
    title:'Tecnologia Avançada',
    subtitle:'você escolhe as suas cores e componentes',
    description:'Cada Bikcraft é única e possui a sua identidade. As medidas serão exatas para o seu corpo e altura, garantindo maior conforto e ergonomia na sua pedalada. Você pode também personalizar completamente as suas cores.',
    button:'Escolha um modelo'
  }

  technologyAdvantages: any = [{
    imgSrc:'../../../assets/img/icones/eletrica.svg',
    width:'24',
    height:'24',
    alt:'Icone de Motor Eletrico',
    title:'Motor Elétrico',
    description:'Toda Bikcraft é equipada com um motor elétrico que possui duração de até 120h. A bateria é recarregada com a sua energia gasta ao pedalar.',
  },{
    imgSrc:'../../../assets/img/icones/rastreador.svg',
    width:'24',
    height:'24',
    alt:'Icone de Rastreador',
    title:'Rastreador',
    description:'Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos rastreadores e sistemas anti-furto para garantir o seu sossego.',

  }
];

  techImg: any = {
    src: '../../../assets/img/fotos/tecnologia.jpg',
    width:'1200',
    height:'1920',
    alt:'tecnologia',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
