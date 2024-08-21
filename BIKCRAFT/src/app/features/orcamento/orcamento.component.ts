import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css']
})
export class OrcamentoComponent implements OnInit {

  budget: any = {
    title: 'solicite um orçamento',
    subtitle: 'Cotações no seu email',
    titleProduct: 'Bikcraft ou Seguro?',

    types: [
      {
        name: 'bikcraft',
        text: 'Bikcraft',
        products: [
          {
            id: 'nimbus',
            name: 'Nimbus Stark',
            price: '4999',
            details: [
              { icon: 'eletrica.svg', description: 'Motor Elétrico' },
              { icon: 'carbono.svg', description: 'Fibra de Carbono' },
              { icon: 'velocidade.svg', description: '50 km/h' },
              { icon: 'rastreador.svg', description: 'Rastreador' },
            ],
            image: 'nimbus.jpg'
          },
          {
            id: 'magic',
            name: 'Magic Might',
            price: '2499',
            details: [
              { icon: 'eletrica.svg', description: 'Motor Elétrico' },
              { icon: 'carbono.svg', description: 'Fibra de Carbono' },
              { icon: 'velocidade.svg', description: '45 km/h' },
              { icon: 'rastreador.svg', description: 'Rastreador' },
            ],
            image: 'magic.jpg'
          },
          {
            id: 'nebula',
            name: 'Nebula Cosmic',
            price: '3999',
            details: [
              { icon: 'eletrica.svg', description: 'Motor Elétrico' },
              { icon: 'carbono.svg', description: 'Fibra de Carbono' },
              { icon: 'velocidade.svg', description: '40 km/h' },
              { icon: 'rastreador.svg', description: 'Rastreador' },
            ],
            image: 'nebula.jpg'
          }
        ]
      },
      {
        name: 'seguro',
        text: 'Seguro',
        plans: [
          {
            id: 'prata',
            name: 'Prata',
            price: '199'
          },
          {
            id: 'ouro',
            name: 'Ouro',
            price: '299'
          }
        ]
      }
    ],
    personalDataTitle: 'dados pessoais',
    personalData: [
      { id: 'nome', label: 'Nome', type: 'text', placeholder: '' },
      { id: 'sobrenome', label: 'Sobrenome', type: 'text', placeholder: '' },
      { id: 'cpf', label: 'CPF', type: 'text', placeholder: '000.000.000-00' },
      { id: 'email', label: 'Email', type: 'email', placeholder: '' },
    ],
    deliveryTitle: 'entrega',
    deliveryData: [
      { id: 'cep', label: 'CEP', type: 'text', placeholder: '' },
      { id: 'numero', label: 'Número', type: 'text', placeholder: '' },
      { id: 'logradouro', label: 'Logradouro', type: 'text', placeholder: '' },
      { id: 'bairro', label: 'Bairro', type: 'text', placeholder: '' },
      { id: 'cidade', label: 'Cidade', type: 'text', placeholder: '' },
      { id: 'estado', label: 'Estado', type: 'text', placeholder: '' },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }
}
