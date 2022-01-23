import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResponsePokemon } from 'src/app/interfaces/response-api-pokemon.interface';

@Component({
  selector: 'app-modal-duelo',
  templateUrl: './modal-duelo.component.html',
  styleUrls: ['./modal-duelo.component.scss']
})
export class ModalDueloComponent implements OnInit {
  public pokemon1: ResponsePokemon;
  public pokemon2: ResponsePokemon;
  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.pokemon1 = JSON.parse(localStorage.getItem('pokemon1'));
    this.pokemon2 = JSON.parse(localStorage.getItem('pokemon2'));
  }

  public closeModal(): void{
    this.dialog.closeAll();
  }

  public luchar(): void{
    const suma1 = this.pokemon1.stats.reduce((sum, item) => sum + item.base_stat, 0);
    const suma2 = this.pokemon2.stats.reduce((sum, item) => sum + item.base_stat, 0);
    if (suma1 > suma2){
      this.snackBar.open(`El ganador es ${this.pokemon1.name}`, 'Aceptar', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }else if (suma1 < suma2){
      this.snackBar.open(`El ganador es ${this.pokemon2.name}`, 'Aceptar', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }else{
      this.snackBar.open(`Empate`, 'Aceptar', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }
  }
}
