import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-location',
  templateUrl: './store-location.component.html',
  styleUrls: ['./store-location.component.css']
})
export class StoreLocationComponent implements OnInit {

  store: any = [{
    img:'../../../assets/img/lojas/rj.jpg', alt:'mapa marcando o endereço em Rua Ali Perto, 25 - Rio de Janeiro - RJ',
    name:'mapa marcando o endereço em Rua Ali Perto, 25 - Rio de Janeiro - R',
    state:'Rio de Janeiro',
    acronym:'RJ',
    address:'Rua Ali Perto, 25',
    storeData:[{
      href:'mailto:rj@bikcraft.com',
      text:'rjbikcraft.com',
    },{
      href:'tel:+552199999999',
      text:'+55 21 99999-9999',
    }],
    icon:{
      src:'../../../assets/img/icones/horario.svg',
      alt:'Icone de Horario',
      text:'08-18h de seg à dom',
    }
  },{
    img:'../../../assets/img/lojas/sp.jpg', alt:'mapa marcando o endereço em Rua Ali Perto, 25 - São Paulo - SP',
    state:'São Paulo',
    acronym:'SP',
    address:'Rua Ali Perto, 25',
    storeData:[{
      href:'mailto:sp@bikcraft.com',
      text:'spbikcraft.com',
    },{
      href:'tel:+551199999999',
      text:'+55 11 99999-9999',
    }],
    icon:{
      src:'../../../assets/img/icones/horario.svg',
      alt:'Icone de Horario',
      text:'08-18h de seg à dom',
  }
}]

  constructor() { }

  ngOnInit(): void {
  }

}
