import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contactInfo: any = {
    title: 'Nosso Contato',
    subtitle: 'Respostas em até 24h',
    addressShop: {
      title: 'Loja Online',
      street: 'Rua Maria Nascimento - São Bernardo do Campo',
      city: 'São Paulo - SP',
    },
    address: [
      { contact: 'contato@bikcraft.com', href: 'mailto:contato@bikcraft.com' },
      { contact: 'assistencia@bikcraft.com', href: 'mailto:assistencia@bikcraft.com' },
      { contact: '+55 11 95891-3445', href: 'tel:+5511958913445' },
    ],
    network: [
      { imgRef: './', imgSrc: '../../../assets/img/redes/instagram-p.svg', alt: 'Instagram' },
      { imgRef: './', imgSrc: '../../../assets/img/redes/facebook-p.svg', alt: 'Facebook' },
      { imgRef: './', imgSrc: '../../../assets/img/redes/youtube-p.svg', alt: 'Youtube' },
    ]
  }

  constructor() { }

  ngOnInit(): void { }
}
