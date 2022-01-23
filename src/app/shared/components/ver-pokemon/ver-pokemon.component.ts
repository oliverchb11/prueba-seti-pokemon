import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { ResponsePokemon } from 'src/app/interfaces/response-api-pokemon.interface';

@Component({
  selector: 'app-ver-pokemon',
  templateUrl: './ver-pokemon.component.html',
  styleUrls: ['./ver-pokemon.component.scss']
})
export class VerPokemonComponent implements OnInit {
  public pokemon: any;
  public pokemon1: any;
  public pokemon2: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private pokemonService: PokemonService,
    private snackBar: MatSnackBar
    ) {
    console.log(this.data.pokemon);
   }

  ngOnInit(): void {
    this.pokemon1 = JSON.parse(localStorage.getItem('pokemon1'));
    this.pokemon2 = JSON.parse(localStorage.getItem('pokemon2'));
    console.log(this.pokemon1);
  }


  public closeModal(): void{
    this.dialog.closeAll();
  }

  public selecionarPokemon(pokemon: any): void {
    localStorage.setItem('pokemon1', JSON.stringify(pokemon));
    localStorage.setItem('ispokemon1', JSON.stringify(true));
    this.pokemonService.isPokemon1(true);
    this.pokemonService.dataPokemon1(pokemon);
    this.snackBar.open(`¡Has selecionado al pokemon ${pokemon.name.toUpperCase()} ahora esta en tu pokebola!`, 'Aceptar', {
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
    });
    this.closeModal();
  }
  public selecionarPokemon2(pokemon: any): void {
    localStorage.setItem('pokemon2', JSON.stringify(pokemon));
    localStorage.setItem('ispokemon2', JSON.stringify(true));
    this.pokemonService.dataPokemon2(pokemon);
    this.snackBar.open(`¡Has selecionado al pokemon ${pokemon.name.toUpperCase()} ahora esta en tu pokebola!`, 'Aceptar', {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
    this.pokemonService.isPokemon2(true);
    this.closeModal();
  }

  public limpiar(): void{
    // window.location.reload();
    localStorage.removeItem('pokemon1');
    localStorage.removeItem('pokemon2');
    localStorage.removeItem('ispokemon1');
    localStorage.removeItem('ispokemon2');
    this.pokemonService.isPokemon2(false);
    this.pokemonService.isPokemon1(false);
  }
}
