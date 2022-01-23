import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { ResponsePokemon } from 'src/app/interfaces/response-api-pokemon.interface';
import { VerPokemonComponent } from 'src/app/shared/components/ver-pokemon/ver-pokemon.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public pokemones: ResponsePokemon[] = [];
  public isClosePokebola1: boolean;
  constructor(
    private pokemonService: PokemonService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getDataPokemon();
  }

  public getDataPokemon(): void{
    for (let index = 0; index <= 150; index++) {
      this.pokemonService.getPokemones(index).subscribe((data) => {
        this.pokemones.push(data);
      });
    }
  }

  public verPokemon(pokemon: ResponsePokemon): void{
    const dialogRef =  this.dialog.open(VerPokemonComponent, {
      data: {
        pokemon
      },
      width: '60%',
      height: '60%',
      minWidth: '90%',
      minHeight: '90%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public closePokebolaE1(event: boolean): void {
    console.log('importanre', event);
    this.isClosePokebola1 = event;
  }
}



