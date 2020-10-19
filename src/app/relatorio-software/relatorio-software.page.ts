import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio-software',
  templateUrl: './relatorio-software.page.html',
  styleUrls: ['./relatorio-software.page.scss'],
})
export class RelatorioSoftwarePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  empresas=[];
  softwares=[];
gerarRelatorio(categoria,empresa,setor,temLicenca){
  if (localStorage.getItem('software')) {
    this.softwares = JSON.parse(localStorage.getItem('software'));
  }
  if(categoria!=null && categoria!=""){
    this.softwares=this.softwares.filter(software => software.categoria==categoria);
  }
  if(empresa!=null && empresa!="" && empresa!="Selecione uma empresa"){
    this.softwares=this.softwares.filter(software => software.empresa==empresa);
  }
  if(setor!=null && setor!=""){
    this.softwares=this.softwares.filter(software => software.setor==setor);
  }
  if(temLicenca!=null && temLicenca!=""){
    this.softwares=this.softwares.filter(software => software.temLicenca==temLicenca);
  }
  // console.log(this.softwares);
}
}
