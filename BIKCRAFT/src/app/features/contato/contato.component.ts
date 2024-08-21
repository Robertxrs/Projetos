import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {
  contactInfo: any = {
    title: 'Loja Online',
    street: 'Rua Maria Nascimento - São Bernardo do Campo',
    city: 'São Paulo - SP',
    contactAddress: [
      {
        ref: 'mailto:contato@bikcraft.com',
        text: 'contato@bikcraft.com',
      },
      {
        ref: 'mailto:assistencia@bikcraft.com',
        text: 'assistencia@bikcraft.com',
      },
      {
        ref: 'tel:+551199999999',
        text: '+55 11 9999-9999',
      },
    ],
    contactNet: [
      {
        ref: './',
        imgSrc: './img/redes/instagram-p.svg',
        alt: 'Instagram',
      },
      {
        ref: './',
        imgSrc: './img/redes/facebook-p.svg',
        alt: 'Facebook',
      },
      {
        ref: './',
        imgSrc: './img/redes/youtube-p.svg',
        alt: 'Youtube',
      },
    ],
    contactForm: [{
      labelFor:'telefone',
      text:'Telefone',
      inputType:'text',
      id:'telefone',
      name:'telefone',
      placeholder:'(11) 9999-9999',
    },{
      labelFor:'mensagem',
      text:'Mensagem',
      rows:'5',
      id:'mensagem',
      name:'mensagem',
      placeholder:'O que você precisa?',
    }
    ]
  };

  constructor() {}

  ngOnInit(): void {}
}
