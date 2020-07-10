import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RistorantiPage } from './ristoranti.page';

describe('RistorantiPage', () => {
  let component: RistorantiPage;
  let fixture: ComponentFixture<RistorantiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RistorantiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RistorantiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
