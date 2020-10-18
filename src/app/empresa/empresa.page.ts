import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage implements OnInit {

  constructor(){}
  ngOnInit() {}

  empresa: Empresa;

  ionViewDidEnter(){
    this.empresa = new Empresa();
  }

  listarEmpresa():Empresa[]{
    let empresas = [];
    if (localStorage.getItem('empresa')) {
      empresas = JSON.parse(localStorage.getItem('empresa'));
    }
    return empresas;
  }

  gravarEmpresa(){
    let empresas = this.listarEmpresa();
    this.empresa.cod = Date.now()/100000;
    empresas.push(this.empresa);
    localStorage.setItem('empresa', JSON.stringify(empresas));
    this.empresa = new Empresa();
    return true;
  }
  
}

export class Empresa {
  cod:any;
  nome:any;
  estado:number;
  endereco:String;
}