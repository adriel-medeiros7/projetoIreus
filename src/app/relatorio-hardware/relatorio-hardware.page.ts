import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio-hardware',
  templateUrl: './relatorio-hardware.page.html',
  styleUrls: ['./relatorio-hardware.page.scss'],
})
export class RelatorioHardwarePage {

    
    constructor() {
    this.empresas.push({nome:"Selecione uma empresa"});
    let retorno = [];
    retorno = JSON.parse(localStorage.getItem('empresa'));
    retorno.forEach(item=>{
      this.empresas.push(item);
    });

   }
    empresas=[];
    hardwares=[];
  gerarRelatorio(equip,empresa,setor){
    if (localStorage.getItem('hardware')) {
      this.hardwares = JSON.parse(localStorage.getItem('hardware'));
    }
    if(equip!=null && equip!=""){
      this.hardwares=this.hardwares.filter(hardware => hardware.equip==equip);
    }
    if(empresa!=null && empresa!="" && empresa!="Selecione uma empresa"){
      this.hardwares=this.hardwares.filter(hardware => hardware.empresa==empresa);
    }
    if(setor!=null && setor!=""){
      this.hardwares=this.hardwares.filter(hardware => hardware.setor==setor);
    }
    // console.log(this.hardwares);
  }
}


export class Hardware {
  cod:any;
  ident:any;
  equip:number;
  setor:String;
  empresa:String
}
