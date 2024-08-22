import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent implements OnInit {
  budget: any = {
    title: 'solicite um orçamento',
    subtitle: 'Cotações no seu email',
    titleProduct: 'Bikcraft ou Seguro?',
  };

  type: any = {
    choice: [
      {
        type: 'radio',
        name: 'tipo',
        value: 'bikcraft',
        id: 'bikcraft',
        for: 'bikcraft',
        text: 'Bikcraft',
      },
      {
        type: 'radio',
        name: 'tipo',
        value: 'seguro',
        id: 'seguro',
        for: 'seguro',
        text: 'Seguro',
      },
    ],
    bike: [
      {
        type: 'radio',
        name: 'produto',
        value: 'nimbus',
        id: 'nimbus',
        for: 'nimbus',
        nameProd: 'Nimbus Stark',
        price: '4999',
        icon: [
          {
            imgSrc: '../../../assets/img/icones/eletrica.svg',
            alt: 'Icone de Motor Elétrico',
            text: 'Motor Elétrico',
          },
          {
            imgSrc: '../../../assets/img/icones/carbono.svg',
            alt: 'Icone de Fibra de Carbono',
            text: 'Fibra de Carbono',
          },
          {
            imgSrc: '../../../assets/img/icones/velocidade.svg',
            alt: 'Icone de Velocidade',
            text: '50 km/h',
          },
          {
            imgSrc: '../../../assets/img/icones/rastreador.svg',
            alt: 'Icone de Rastreador',
            text: 'Rastreador',
          },
        ],
        img: '../../../assets/img/bicicletas/nimbus.jpg',
        alt: 'Bicicleta preta',
      },
      {
        type: 'radio',
        name: 'produto',
        value: 'magic',
        id: 'magic',
        for: 'magic',
        nameProd: 'Magic Might',
        price: '2499',
        icon: [
          {
            imgSrc: '../../../assets/img/icones/eletrica.svg',
            alt: 'Icone de Motor Elétrico',
            text: 'Motor Elétrico',
          },
          {
            imgSrc: '../../../assets/img/icones/carbono.svg',
            alt: 'Icone de Fibra de Carbono',
            text: 'Fibra de Carbono',
          },
          {
            imgSrc: '../../../assets/img/icones/velocidade.svg',
            alt: 'Icone de Velocidade',
            text: '45 km/h',
          },
          {
            imgSrc: '../../../assets/img/icones/rastreador.svg',
            alt: 'Icone de Rastreador',
            text: 'Rastreador',
          },
        ],
        img: '../../../assets/img/bicicletas/magic.jpg',
        alt: 'Bicicleta preta',
      },
      {
        type: 'radio',
        name: 'produto',
        value: 'nebula',
        id: 'nebula',
        for: 'nebula',
        nameProd: 'Nebula Cosmic',
        price: '3999',
        icon: [
          {
            imgSrc: '../../../assets/img/icones/eletrica.svg',
            alt: 'Icone de Motor Elétrico',
            text: 'Motor Elétrico',
          },
          {
            imgSrc: '../../../assets/img/icones/carbono.svg',
            alt: 'Icone de Fibra de Carbono',
            text: 'Fibra de Carbono',
          },
          {
            imgSrc: '../../../assets/img/icones/velocidade.svg',
            alt: 'Icone de Velocidade',
            text: '40 km/h',
          },
          {
            imgSrc: '../../../assets/img/icones/rastreador.svg',
            alt: 'Icone de Rastreador',
            text: 'Rastreador',
          },
        ],
        img: '../../../assets/img/bicicletas/nebula.jpg',
        alt: 'Bicicleta branca',
      },
    ],
    choicePlan: [
      {
        type: 'radio',
        name: 'produto',
        value: 'prata',
        id: 'prata',
        for: 'prata',
        text: 'Prata',
        price: '199',
      },
      {
        type: 'radio',
        name: 'produto',
        value: 'ouro',
        id: 'ouro',
        for: 'ouro',
        text: 'Ouro',
        price: '299',
      },
    ],
    budgetPersonal: [
      {
        for: 'nome',
        text: 'Nome',
        type: 'text',
        id: 'nome',
        name: 'nome',
        placeholder: 'Seu nome',
        required: true,
      },
      {
        for: 'sobrenome',
        text: 'Sobrenome',
        type: 'text',
        id: 'sobrenome',
        name: 'sobrenome',
        placeholder: 'Seu Sobrenome',
      },
      {
        class: 'col-2',
        for: 'cpf',
        text: 'CPF',
        type: 'text',
        id: 'cpf',
        name: 'cpf',
        placeholder: '000.000.000-00',
        required: true,
      },
      {
        class: 'col-2',
        for: 'email',
        text: 'Email',
        type: 'email',
        id: 'email',
        name: 'email',
        placeholder: 'contato@gmail.com',
        required: true,
      }
    ],
    budgetDelivery:[
      {
        for: 'cep',
        text: 'CEP',
        type: 'text',
        id: 'cep',
        name: 'name',
        placeholder: '000.00.00-00',
        required: true,
      },
      {
        for: 'numero',
        text: 'Número',
        type: 'text',
        id: 'numero',
        name: 'numero',
        placeholder: '',
      },
      {
        for: 'logradouro',
        text: 'Rua',
        type: 'text',
        id: 'logradouro',
        name: 'logradouro',
        placeholder: '',
      },
      {
        for: 'bairro',
        text: 'Bairro',
        type: 'text',
        id: 'bairro',
        name: 'bairro',
        placeholder: '',
      },
      {
        for: 'cidade',
        text: 'Cidade',
        type: 'text',
        id: 'cidade',
        name: 'cidade',
        placeholder: '',
      },{
        for: 'estado',
        text: 'Estado',
        type: 'text',
        id: 'estado',
        name: 'estado',
        placeholder: '',
      }
    ]

  };

  constructor() {}

  ngOnInit(): void {}
}
