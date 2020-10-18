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

  listar(filtro:string='todas'): Hardware[] {
    let hardware=[];
    if (localStorage.getItem('hardware')) {
      hardware = JSON.parse(localStorage.getItem('hardware'));
    }
    return hardware;
  }
}
