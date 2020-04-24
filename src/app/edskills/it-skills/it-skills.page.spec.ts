import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItSkillsPage } from './it-skills.page';

describe('ItSkillsPage', () => {
  let component: ItSkillsPage;
  let fixture: ComponentFixture<ItSkillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItSkillsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItSkillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
