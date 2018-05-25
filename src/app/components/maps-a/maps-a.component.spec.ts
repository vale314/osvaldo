import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsAComponent } from './maps-a.component';

describe('MapsAComponent', () => {
  let component: MapsAComponent;
  let fixture: ComponentFixture<MapsAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
