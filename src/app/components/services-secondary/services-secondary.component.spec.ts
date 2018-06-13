import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSecondaryComponent } from './services-secondary.component';

describe('ServicesSecondaryComponent', () => {
  let component: ServicesSecondaryComponent;
  let fixture: ComponentFixture<ServicesSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
