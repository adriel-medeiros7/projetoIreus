import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-software',
  templateUrl: './listar-software.page.html',
  styleUrls: ['./listar-software.page.scss'],
})
export class ListarSoftwarePage {

  constructor() {
    this.empresas.push({nome:"Selecione uma empresa"});
    let retorno = [];
    retorno = JSON.parse(localStorage.getItem('empresa'));
    retorno.forEach(item=>{
      this.empresas.push(item);
    });

   }
    empresas=[];
    softwares=[];
  gerarRelatorio(equip,empresa,setor){
    if (localStorage.getItem('software')) {
      this.softwares = JSON.parse(localStorage.getItem('software'));
    }
    if(equip!=null && equip!=""){
      this.softwares=this.softwares.filter(software => software.equip==equip);
    }
    if(empresa!=null && empresa!="" && empresa!="Selecione uma empresa"){
      this.softwares=this.softwares.filter(software => software.empresa==empresa);
    }
    if(setor!=null && setor!=""){
      this.softwares=this.softwares.filter(software => software.setor==setor);
    }
    // console.log(this.softwares);

  }
}
 
