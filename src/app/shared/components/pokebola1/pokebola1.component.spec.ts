import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokebola1Component } from './pokebola1.component';

describe('Pokebola1Component', () => {
  let component: Pokebola1Component;
  let fixture: ComponentFixture<Pokebola1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pokebola1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pokebola1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
