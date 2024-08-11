import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css'],
})
export class BikeDetailsComponent implements OnInit {
  id: number = 0;
  bike:any = null;

  bikes: any = [
    {
      id: '1',
      price: '3999',
      title: 'Magic Might',
      description:
        'A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.',
      deliver: '5',
      stock: '19',
      info: [
        {
          icon: 'eletric',
          title: 'Motor Elétrico',
          description:
            'Permite você viajar distâncias inimaginaveis com a sua bike',
        },
        {
          icon: 'speed',
          title: '45km/h',
          description:
            'A mais rápida bicicleta elétrica disponível hoje no mercado.',
        },
        {
          icon: 'tracker',
          title: 'Rastreador',
          description:
            'Rastreador e sistema anti-furto para garantir o seu sossego.',
        },
        {
          icon: 'fiber',
          title: 'Fibra de Carbono',
          description:
            'Maior proteção possível para a sua Bikcraft com fibra de carbono.',
        },
      ],
      technicalSheet:{
        weight:'13',
        height:'23',
        widht:'32',
        depth:'54',
        marches:'4',
        wheel:'4',
      },
      images:['../../../../assets/img/bicicleta/magic.jpg','../../../../assets/img/bicicleta/nebula.jpg','../../../../assets/img/bicicleta/nimbus.jpg']
    },
    {
      id: '2',
      price: '3999',
      title: 'aaaa Might',
      description:
        'A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.',
      deliver: '5',
      stock: '19',
      info: [
        {
          icon: 'eletric',
          title: 'Motor Elétrico',
          description:
            'Permite você viajar distâncias inimaginaveis com a sua bike',
        },
        {
          icon: 'speed',
          title: '45km/h',
          description:
            'A mais rápida bicicleta elétrica disponível hoje no mercado.',
        },
        {
          icon: 'tracker',
          title: 'Rastreador',
          description:
            'Rastreador e sistema anti-furto para garantir o seu sossego.',
        },
        {
          icon: 'fiber',
          title: 'Fibra de Carbono',
          description:
            'Maior proteção possível para a sua Bikcraft com fibra de carbono.',
        },
      ],
      technicalSheet:{
        weight:'13',
        height:'23',
        widht:'32',
        depth:'54',
        marches:'4',
        wheel:'4',
      },
      images:['../../../../assets/img/bicicleta/magic.jpg','../../../../assets/img/bicicleta/nebula.jpg','../../../../assets/img/bicicleta/nimbus.jpg']
    },
  ];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    console.log(this.id);
    this.bike = this.bikes.find((el:any) => el.id === this.id)

  }
}
