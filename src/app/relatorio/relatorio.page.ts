import { Component, OnInit } from '@angular/core';
import { Hardware } from '../hardware/hardware.page';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.page.html',
  styleUrls: ['./relatorio.page.scss'],
})
export class RelatorioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listarHardware():Hardware[]{
    let hardwares = [];
    if (localStorage.getItem('hardware')) {
      hardwares = JSON.parse(localStorage.getItem('hardware'));
    }
    return hardwares;
  }
}
