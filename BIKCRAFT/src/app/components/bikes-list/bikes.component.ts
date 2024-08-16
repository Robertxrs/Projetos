import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikeList:any = [{
    path:'/bike/1',
    imgSrc:'../../../assets/img/bicicletas/nebula.jpg',
    titulo:'Nebula Cosmic',
    valor:'3999'
  },
  {
    path:'/bike/2',
    imgSrc:'../../../assets/img/bicicletas/magic.jpg',
    titulo:'Magic Might',
    valor:'2499'
  },
  {
    path:'/bike/3',
    imgSrc:'../../../assets/img/bicicletas/nimbus.jpg',
    titulo:'Nimbus Stark',
    valor:'4999'
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
