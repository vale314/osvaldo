import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsTextComponent } from './about-us-text.component';

describe('AboutUsTextComponent', () => {
  let component: AboutUsTextComponent;
  let fixture: ComponentFixture<AboutUsTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
