import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  testimonialInfo: any = {
    imgSrc:'../../../assets/img/fotos/depoimento.jpg',
    description:'Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez foi intensificar o meu amor por esta atividade. Recomendo à todos que amo.',
    name:'Ana Júlia',
    width:'1560',
    height:'1360',
    alt:'Pessoa pedalando uma bicicleta Bikcraft',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
