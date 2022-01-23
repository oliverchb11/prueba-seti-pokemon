import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { ResponsePokemon } from 'src/app/interfaces/response-api-pokemon.interface';

@Component({
  selector: 'app-pokebola1',
  templateUrl: './pokebola1.component.html',
  styleUrls: ['./pokebola1.component.scss']
})
export class Pokebola1Component implements OnInit {
  @Input()  set closePokebolas(value: boolean) {
    console.log('importanre', value);
    if (!value){
      this.pokebolaAbierta = value;
    }
  }
  public pokemon1: any;
  public isPokemon1 = false;
  public pokebolaAbierta = false;
  constructor(
    private pokemonService: PokemonService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.pokemon1 = JSON.parse(localStorage.getItem('pokemon1'));
    if (JSON.parse(localStorage.getItem('ispokemon1'))) {
      this.isPokemon1 = JSON.parse(localStorage.getItem('ispokemon1'));
    }
    this.pokemonService.pokemon1Obs$.subscribe((data: boolean) => this.isPokemon1 = data);
    this.pokemonService.pokemon1DataObs$.subscribe((data: ResponsePokemon) => this.pokemon1 = data);
  }

  public pokemon1Data(): void{
    console.log(this.pokemon1);
    this.pokebolaAbierta = true;
    if (this.pokebolaAbierta) {
      this.snackBar.open(`Abre la otra pokebola para empezar el duelo`, 'Aceptar', {
        horizontalPosition: 'left',
        verticalPosition: 'bottom',
      });
    }
  }
  public closePokebola(): void{
    this.pokebolaAbierta = false;
  }

}
