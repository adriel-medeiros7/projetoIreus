import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarHardwarePage } from './listar-hardware.page';

describe('ListarHardwarePage', () => {
  let component: ListarHardwarePage;
  let fixture: ComponentFixture<ListarHardwarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarHardwarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarHardwarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
