import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JusticaFamiliaPage } from './justica-familia.page';

describe('JusticaFamiliaPage', () => {
  let component: JusticaFamiliaPage;
  let fixture: ComponentFixture<JusticaFamiliaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JusticaFamiliaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JusticaFamiliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
