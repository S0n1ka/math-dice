import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FantasyAgeDicePage } from './fantasy-age-dice.page';

describe('FantasyAgeDicePage', () => {
  let component: FantasyAgeDicePage;
  let fixture: ComponentFixture<FantasyAgeDicePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FantasyAgeDicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FantasyAgeDicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
