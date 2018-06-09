import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePortafolioFullComponent } from './page-portafolio-full.component';

describe('PagePortafolioFullComponent', () => {
  let component: PagePortafolioFullComponent;
  let fixture: ComponentFixture<PagePortafolioFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePortafolioFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePortafolioFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
