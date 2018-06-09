import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioFullComponent } from './portafolio-full.component';

describe('PortafolioFullComponent', () => {
  let component: PortafolioFullComponent;
  let fixture: ComponentFixture<PortafolioFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafolioFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
