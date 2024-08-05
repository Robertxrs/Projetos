import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikeList:any = [{
    path:'',
    imgSrc:'../../../assets/img/bicicletas/nebula.jpg',
    titulo:'Nebula Cosmic',
    valor:'3999'
  },
  {
    path:'',
    imgSrc:'../../../assets/img/bicicletas/magic.jpg',
    titulo:'Magic Might',
    valor:'2499'
  },
  {
    path:'',
    imgSrc:'../../../assets/img/bicicletas/nimbus.jpg',
    titulo:'Nimbus Stark',
    valor:'4999'
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
