import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  footerContact: any = {
    logo: '../../../assets/img/bikcraft.svg',
    title: 'Contato',
    copy:'Bikcraft © Alguns direitos reservados.',
    contact: {
      telLink:'tel:+551199999999',
      telephone: '+55 11 9999-9999',
      emailLink:'mailto:contato@bikcraft.com',
      email: 'contato@bikcraft.com',
    },
    address: {
      addressLink:'https://www.bing.com/maps?q=Sao+paulo&FORM=HDRSC6&cp=-23.683231%7E-46.595678&lvl=10.5',
      street: 'Rua Maria Nascimento',
      neighborhood: 'São Bernardo do Campo',
      state: 'São Paulo',
      abbreviation: 'SP',
    },
  };

  footerNetwork: any = [
    {
      link: 'https://www.youtube.com/',
      svgSrc: '../../../assets/img/redes/youtube.svg',
    },
    {
      link: 'https://www.instagram.com/',
      svgSrc: '../../../assets/img/redes/instagram.svg',
    },
    {
      link: 'https://pt-br.facebook.com/',
      svgSrc: '../../../assets/img/redes/facebook.svg',
    },
  ];

  footerInfo: any = [{
    path:'/bikes',
    title:'Bicicletas'
  },{
    path:'/insurance',
    title:'Seguros'
  },{
    path:'/contact',
    title:'Contato'
  }
]

  constructor() {}

  ngOnInit(): void {}
}
