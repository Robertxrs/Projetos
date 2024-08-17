import { Component, OnInit, ɵsetClassMetadata } from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  insuranceList: any = [{
      title: 'PRATA',
      price: '199',
      list: [
        'Duas trocas por ano',
        'Assistência técnica',
        'Suporte 08h às 18h',
        'Cobertura estadual'
      ],
      path: '/budget?tipo=seguro&produto=prata',
      button: 'Inscreva-se',
      class:'secundario'
    },
    {
      title: 'OURO',
      price: '299',
      list: [
        'Cinco trocas por ano',
        'Assistência especial',
        'Suporte 24h',
        'Cobertura nacional',
        'Desconto em parceiros',
        'Acesso ao Clube Bikcraft'
      ],
      path: '/budget?tipo=seguro&produto=ouro',
      button: 'Inscreva-se',
      class: ''
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
