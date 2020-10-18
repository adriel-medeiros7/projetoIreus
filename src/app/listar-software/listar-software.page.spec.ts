import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarSoftwarePage } from './listar-software.page';

describe('ListarSoftwarePage', () => {
  let component: ListarSoftwarePage;
  let fixture: ComponentFixture<ListarSoftwarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSoftwarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarSoftwarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
