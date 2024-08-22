import { Component, OnInit } from '@angular/core';

interface obj{
  labelFor:string,
  text:string,
  inputType:string,
  id:string,
  name:string,
  placeholder:string,
  class?:string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactInfo: any = {
    title: 'Loja Online',
    street: 'Rua Maria Nascimento - São Bernardo do Campo',
    city: 'São Paulo - SP',
    contactAddress: [
      {
        ref: 'mailto:contato@bikcraft.com',
        text: 'contato@bikcraft.com',
        class:'first'
      },
      {
        ref: 'mailto:assistencia@bikcraft.com',
        text: 'assistencia@bikcraft.com',
        class:'second'
      },
      {
        ref: 'tel:+551199999999',
        text: '+55 11 9999-9999',
        class:'third'
      },
    ],
    contactNet: [
      {
        ref: './',
        imgSrc: '../../../assets/img/redes/instagram-p.svg',
        alt: 'Instagram',
      },
      {
        ref: './',
        imgSrc: '../../../assets/img/redes/facebook-p.svg',
        alt: 'Facebook',
      },
      {
        ref: './',
        imgSrc: '../../../assets/img/redes/youtube-p.svg',
        alt: 'Youtube',
      },
    ],
    contactForm:[
      {
        labelFor:'nome',
        text:'nome',
        inputType:'text',
        id:'nome',
        name:'nome',
        placeholder:'Seu nome',
      },{
      labelFor:'telefone',
      text:'Telefone',
      inputType:'text',
      id:'telefone',
      name:'telefone',
      placeholder:'11 99999-9999',
    },
    {
      labelFor:'email',
      text:'Email',
      inputType:'email',
      id:'email',
      name:'email',
      placeholder:'contato@email.com',
      class:'col-2'
    }
    ,{
      labelFor:'mensagem',
      text:'Mensagem',
      inputType: 'textarea',
      rows:'5',
      id:'mensagem',
      name:'mensagem',
      placeholder:'O que você precisa?',
      class:'col-2'
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
