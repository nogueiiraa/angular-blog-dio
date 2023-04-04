import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = 'https://viagenseoutrashistorias.com.br/wp-content/uploads/2020/05/dicas-de-ushuaia-argentina-1.jpg'
  contentTitle:string = 'BEM VINDO AO FIM DO MUNDO!'
  contentDescription:string = 'Ushuaia é uma cidade turística na Argentina que fica no arquipélago da Terra do Fogo, no extremo sul da América do Sul, conhecido como fim do mundo. Localizada em uma colina íngreme e sujeita a ventos muito fortes, a cidade é cercada pela cordilheira Martial e pelo Estreito de Beagle.'

  constructor() { }

  ngOnInit(): void {
  }

}
