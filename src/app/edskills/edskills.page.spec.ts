import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdskillsPage } from './edskills.page';

describe('EdskillsPage', () => {
  let component: EdskillsPage;
  let fixture: ComponentFixture<EdskillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdskillsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdskillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
