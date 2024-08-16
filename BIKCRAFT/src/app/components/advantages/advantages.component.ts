import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})
export class AdvantagesComponent implements OnInit {

  constructor() { }

  advantagesIcon: any = [
    {
      img: '../../../assets/img/icones/eletrica.svg',
      title: 'Reparo Elétrico',
      description: 'Garantimos o reparo completo do seu motor em caso de falhas. Sabemos que falhas são raras, mas estamos aqui para caso ocorra.',
    },
    {
      img: '../../../assets/img/icones/carbono.svg',
      title: 'Carbono',
      description: 'Nossos quadros são feitos para durar para sempre. Mas caso algo ocorra, ficamos felizes em reparar.',
    },
    {
      img: '../../../assets/img/icones/sustentavel.svg',
      title: 'Sustentável',
      description: 'Trabalhamos com a filosofia de desperdício zero. Qualquer parte defeituosa é reciclada e reutilizada em outro projeto.',
    },
    {
      img: '../../../assets/img/icones/rastreador.svg',
      title: 'Rastreador',
      description: 'Utilizamos o GPS da sua Bikcraft em conjunto com especialistas em segurança para efetuarmos a recuperação.',
    },
    {
      img: '../../../assets/img/icones/seguro.svg',
      title: 'Segurança',
      description: 'Com o seguro Bikcraft você pode ficar tranquilo em saber que o seu dinheiro não será perdido em casos de roubo.',
    },
    {
      img: '../../../assets/img/icones/velocidade.svg',
      title: 'Rapidez',
      description: 'A sua Bikcraft ficará pronta para uso no mesmo dia, caso você traga ela para ser reparada em uma das filiais.',
    }
  ];

  ngOnInit(): void {
  }


}
