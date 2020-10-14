import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HardwarePage } from './hardware.page';

describe('HardwarePage', () => {
  let component: HardwarePage;
  let fixture: ComponentFixture<HardwarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HardwarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
