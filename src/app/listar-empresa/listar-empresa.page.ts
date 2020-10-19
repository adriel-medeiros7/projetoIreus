import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.page.html',
  styleUrls: ['./listar-empresa.page.scss'],
})
export class ListarEmpresaPage implements OnInit {

  constructor() { }
  ngOnInit() {}

  empresas: Empresa[];

  ionViewDidEnter(){
    this.empresas = this.listarEmpresa();
  }

  listarEmpresa():Empresa[]{
    let empresas = [];
    if (localStorage.getItem('empresa')) {
      empresas = JSON.parse(localStorage.getItem('empresa'));
    }
    return empresas;
  }

  removerEmpresa(empresa:Empresa){
    let empresas = this.listarEmpresa();
    empresas = empresas.filter(
      elemento => {
        return elemento.cod != empresa.cod;
      }
    )
    localStorage.setItem('empresa',JSON.stringify(empresas));
    this.empresas = this.listarEmpresa();
  }

}

export class Empresa {
  id: any;
  cod:any;
  nome:String;
  estado:String;
  endereco:String;
}

