import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  partnerImg: any = [
    { imgSrc: '../../../assets/img/parceiros/caravan.svg', width: '140', height: '38', title: 'Logo da Caravan' },
    { imgSrc: '../../../assets/img/parceiros/ranek.svg', width: '149', height: '36', title: 'Logo da Ranek' },
    { imgSrc: '../../../assets/img/parceiros/handel.svg', width: '140', height: '50', title: 'Logo da Handel' },
    { imgSrc: '../../../assets/img/parceiros/dogs.svg', width: '152', height: '39', title: 'Logo da Dogs' },
    { imgSrc: '../../../assets/img/parceiros/lescone.svg',  width: '208', height: '41', title: 'Logo da LeScone' },
    { imgSrc: '../../../assets/img/parceiros/flexblog.svg', width: '165', height: '38', title: 'Logo da FlexBlog' },
    { imgSrc: '../../../assets/img/parceiros/wildbeast.svg', width: '196', height: '34', title: 'Logo da Wildbeast' },
    { imgSrc: '../../../assets/img/parceiros/surfbot.svg', width: '200', height: '49', title: 'Logo da Surfbot' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
