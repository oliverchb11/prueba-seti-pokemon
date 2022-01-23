import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { VerPokemonComponent } from './components/ver-pokemon/ver-pokemon.component';
import { MaterialModule } from '../material/material.module';
import { Pokebola1Component } from './components/pokebola1/pokebola1.component';
import { Pokebola2Component } from './components/pokebola2/pokebola2.component';
import { ModalDueloComponent } from './components/modal-duelo/modal-duelo.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    VerPokemonComponent,
    Pokebola1Component,
    Pokebola2Component,
    ModalDueloComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
, exports: [
  HeaderComponent,
  FooterComponent,
  VerPokemonComponent,
  Pokebola1Component,
  Pokebola2Component
  ]
})
export class SharedModule { }
