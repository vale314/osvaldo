import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSecondaryTagComponent } from './services-secondary-tag.component';

describe('ServicesSecondaryTagComponent', () => {
  let component: ServicesSecondaryTagComponent;
  let fixture: ComponentFixture<ServicesSecondaryTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesSecondaryTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSecondaryTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
