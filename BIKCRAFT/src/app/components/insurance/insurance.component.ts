import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  insuranceList: any = [{
      titulo: 'PRATA',
      valor: 'R$ 199 mensal',
      list: [
        'Duas trocas por ano',
        'Assistência técnica',
        'Suporte 08h às 18h',
        'Cobertura estadual'
      ],
      path: '/budget?tipo=seguro&produto=prata',
      botao: 'Inscreva-se',
    },
    {
      titulo: 'OURO',
      valor: 'R$ 299 mensal',
      list: [
        'Cinco trocas por ano',
        'Assistência especial',
        'Suporte 24h',
        'Cobertura nacional',
        'Desconto em parceiros',
        'Acesso ao Clube Bikcraft'
      ],
      path: '/budget?tipo=seguro&produto=ouro',
      botao: 'Inscreva-se',
      classe: ''
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
