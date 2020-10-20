import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software',
  templateUrl: './software.page.html',
  styleUrls: ['./software.page.scss'],
})
export class SoftwarePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  software: Software;
  empresas = JSON.parse(localStorage.getItem('empresa'));
  
  ionViewDidEnter(){
    this.software = new Software();
  }
  
  listarSoftware():Software[]{
    let Softwares = [];
    if (localStorage.getItem('software')) {
      Softwares = JSON.parse(localStorage.getItem('software'));
    }
    return Softwares;
  }
  
  gravarSoftware(){
    let softwares = this.listarSoftware();
    this.software.cod = Date.now()/100000;
    softwares.push(this.software);
    localStorage.setItem('software', JSON.stringify(softwares));
    this.software = new Software();
    return true;
  }
    
}

export class Software {
  cod:any;
  ident:any;
  equip:number;
  setor:String;
  empresa:String
}
  

