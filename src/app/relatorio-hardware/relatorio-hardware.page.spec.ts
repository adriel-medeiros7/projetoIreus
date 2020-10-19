import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelatorioHardwarePage } from './relatorio-hardware.page';

describe('RelatorioHardwarePage', () => {
  let component: RelatorioHardwarePage;
  let fixture: ComponentFixture<RelatorioHardwarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioHardwarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelatorioHardwarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
