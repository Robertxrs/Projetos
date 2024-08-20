import { Component, OnInit } from '@angular/core';

interface obj {
  path: string,
  imgSrc: string,
  altSrc: string,
  price: string,
  title: string,
  class?: string,
  description: string,
  button: string,
  listIcons:any
}
@Component({
  selector: 'app-bicicletas',
  templateUrl: './bicicletas.component.html',
  styleUrls: ['./bicicletas.component.css'],
})
export class BicicletasComponent implements OnInit {

  bikes: obj[] = [
    {
      path: '/bike/3',
      imgSrc: '../../../assets/img/bicicletas/nimbus.jpg',
      altSrc: 'Bicicleta preta',
      price: '4999',
      title: 'Nimbus Stark',
      description:
        'A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.',
      button: 'Mais Sobre',
      listIcons: [
        {
          icon: '../../../assets/img/icones/eletrica.svg',
          alt: 'Icone de Motor Elétrico',
          subtitle: 'Motor Elétrico',
        },
        {
          icon: '../../../assets/img/icones/carbono.svg',
          alt: 'Icone Fibra de Carbono',
          subtitle: 'Fibra de Carbono',
        },
        {
          icon: '../../../assets/img/icones/velocidade.svg',
          alt: 'Icone de velocidade',
          subtitle: '60 km/h',
        },
        {
          icon: '../../../assets/img/icones/rastreador.svg',
          alt: 'Icone de Rastreador',
          subtitle: 'Rastreador',
        },
      ],
    },
    {
      path: '/bike/1',
      imgSrc: '../../../assets/img/bicicletas/magic.jpg',
      altSrc: 'Bicicleta preta',
      price: '2499',
      title: 'Magic Might',
      class: 'bicicletas-bg magic-might',
      description:
        'A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.',
      button: 'Mais Sobre',
      listIcons: [
        {
          icon: '../../../assets/img/icones/eletrica.svg',
          alt: 'Icone de Motor Elétrico',
          subtitle: 'Motor Elétrico',
        },
        {
          icon: '../../../assets/img/icones/carbono.svg',
          alt: 'Icone Fibra de Carbono',
          subtitle: 'Fibra de Carbono',
        },
        {
          icon: '../../../assets/img/icones/velocidade.svg',
          alt: 'Icone de velocidade',
          subtitle: '45 km/h',
        },
        {
          icon: '../../../assets/img/icones/rastreador.svg',
          alt: 'Icone de Rastreador',
          subtitle: 'Rastreador',
        },
      ],
    },
    {
      path: '/bike/2',
      imgSrc: '../../../assets/img/bicicletas/nebula.jpg',
      altSrc: 'Bicicleta preta',
      price: '3999',
      title: 'Nebula Cosmic',
      description:
        'A Nebula Cosmic é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.',
      button: 'Mais Sobre',
      listIcons: [
        {
          icon: '../../../assets/img/icones/eletrica.svg',
          alt: 'Icone de Motor Elétrico',
          subtitle: 'Motor Elétrico',
        },
        {
          icon: '../../../assets/img/icones/carbono.svg',
          alt: 'Icone Fibra de Carbono',
          subtitle: 'Fibra de Carbono',
        },
        {
          icon: '../../../assets/img/icones/velocidade.svg',
          alt: 'Icone de velocidade',
          subtitle: '50 km/h',
        },
        {
          icon: '../../../assets/img/icones/rastreador.svg',
          alt: 'Icone de Rastreador',
          subtitle: 'Rastreador',
        },
      ],
    },
  ];


  constructor() {}

  ngOnInit(): void {}
}
