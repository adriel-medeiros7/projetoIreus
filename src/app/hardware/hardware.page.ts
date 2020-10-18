import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.page.html',
  styleUrls: ['./hardware.page.scss'],
})
export class HardwarePage implements OnInit {
  constructor(){}
  ngOnInit() {}

  hardware: Hardware;

  ionViewDidEnter(){
    this.hardware = new Hardware();
  }

  listarHardware():Hardware[]{
    let hardwares = [];
    if (localStorage.getItem('hardware')) {
      hardwares = JSON.parse(localStorage.getItem('hardware'));
    }
    return hardwares;
  }

  gravarHardware(){
    let hardwares = this.listarHardware();
    this.hardware.cod = Date.now()/100000;
    hardwares.push(this.hardware);
    localStorage.setItem('hardware', JSON.stringify(hardwares));
    this.hardware = new Hardware();
    return true;
  }
  
}

export class Hardware {
  cod:any;
  ident:any;
  equip:number;
  setor:String;
}
