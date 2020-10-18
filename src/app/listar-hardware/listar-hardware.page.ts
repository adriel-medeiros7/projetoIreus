import { Component, OnInit } from '@angular/core';@Component({
  selector: 'app-listar-hardware',
  templateUrl: './listar-hardware.page.html',
  styleUrls: ['./listar-hardware.page.scss'],
})
export class ListarHardwarePage implements OnInit {

  constructor() { }
  ngOnInit() {}

  hardwares: Hardware[];

  ionViewDidEnter(){
    this.hardwares = this.listarHardware();
  }

  listarHardware():Hardware[]{
    let hardwares = [];
    if (localStorage.getItem('hardware')) {
      hardwares = JSON.parse(localStorage.getItem('hardware'));
    }
    return hardwares;
  }

  removerHardware(hardware:Hardware){
    let hardwares = this.listarHardware();
    hardwares = hardwares.filter(
      elemento => {
        return elemento.cod != hardware.cod;
      }
    )
    localStorage.setItem('hardware',JSON.stringify(hardwares));
    this.hardwares = this.listarHardware();
  }

}

export class Hardware {
  cod:any;
  ident:any;
  equip:number;
  setor:String;
}
