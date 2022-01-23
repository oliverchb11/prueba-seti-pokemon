import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokebola2Component } from './pokebola2.component';

describe('Pokebola2Component', () => {
  let component: Pokebola2Component;
  let fixture: ComponentFixture<Pokebola2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pokebola2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pokebola2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
