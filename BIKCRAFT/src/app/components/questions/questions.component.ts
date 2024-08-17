import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: any = [{
    dtButton:'Qual forma de pagamento vocês aceitam?',
    ddDescription:'Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.',
  },{
    dtButton:'Como posso entrar em contato?',
    ddDescription:'Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.',
  },{
    dtButton:'Vocês possuem algum desconto?',
    ddDescription:'Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.',
  },{
    dtButton:'Qual a garantia que possuo?',
    ddDescription:'Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.',
  },{
    dtButton:'Posso parcelar no boleto?',
    ddDescription:'Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.',
  },{
    dtButton:'Quantas trocas posso fazer ao ano?',
    ddDescription:'Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.',
  }
];
  constructor() { }


  ngOnInit(): void {
  }

}
