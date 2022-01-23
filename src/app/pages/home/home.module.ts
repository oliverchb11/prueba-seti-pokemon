import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/material/material.module';
import { VerPokemonComponent } from 'src/app/shared/components/ver-pokemon/ver-pokemon.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule
  ],
  entryComponents: [VerPokemonComponent]
})
export class HomeModule { }
