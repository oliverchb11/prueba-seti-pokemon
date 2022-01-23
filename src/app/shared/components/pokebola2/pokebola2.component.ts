import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { ResponsePokemon } from 'src/app/interfaces/response-api-pokemon.interface';
import { ModalDueloComponent } from '../modal-duelo/modal-duelo.component';

@Component({
  selector: 'app-pokebola2',
  templateUrl: './pokebola2.component.html',
  styleUrls: ['./pokebola2.component.scss']
})
export class Pokebola2Component implements OnInit {
  @Input() pokemon: ResponsePokemon;
  @Output() closePokebola1 = new EventEmitter<boolean>();
  public pokemon2: any;
  public isPokemon2 = false;
  public pokebolaAbierta = false;
  constructor(
    private pokemonService: PokemonService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.pokemon2 = JSON.parse(localStorage.getItem('pokemon2'));
    if (JSON.parse(localStorage.getItem('ispokemon2'))) {
      this.isPokemon2 = JSON.parse(localStorage.getItem('ispokemon2'));
    }
    this.pokemonService.pokemon2Obs$.subscribe((data: boolean) => this.isPokemon2 = data);
    this.pokemonService.pokemon2DataObs$.subscribe((data: ResponsePokemon) => this.pokemon2 = data);
  }

  public pokemon2Data(): void{
    this.pokebolaAbierta = true;
    console.log(this.pokemon2);
    const dialog = this.dialog.open(ModalDueloComponent, {
      width: '60%',
      height: '60%',
      minWidth: '90%',
      minHeight: '90%',
    });
    dialog.afterClosed().subscribe(() => {
      this.pokebolaAbierta = false;
      this.closePokebola1.emit(false);
    });
  }
  public closePokebola(): void{
    this.pokebolaAbierta = false;
    this.closePokebola1.emit(false);
  }
}
