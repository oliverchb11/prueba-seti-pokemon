import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ResponsePokemon } from 'src/app/interfaces/response-api-pokemon.interface';
import { environment } from 'src/environments/environment';
const PATH_API = environment.PATH_API;
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemon1Sub$ = new Subject<boolean>();
  public pokemon1Obs$ = this.pokemon1Sub$.asObservable();
  private pokemon2Sub$ = new Subject<boolean>();
  public pokemon2Obs$ = this.pokemon2Sub$.asObservable();
  // data pokemon
  private pokemon1DataSub$ = new Subject<ResponsePokemon>();
  public pokemon1DataObs$ = this.pokemon1DataSub$.asObservable();
  private pokemon2DataSub$ = new Subject<ResponsePokemon>();
  public pokemon2DataObs$ = this.pokemon2DataSub$.asObservable();
  constructor(private http: HttpClient) { }

  public getPokemones(id: number): Observable<ResponsePokemon>{
    const recource = `pokemon/${id}`;
    return this.http.get<ResponsePokemon>(`${PATH_API}${recource}`);
  }

  public isPokemon1(value: boolean): void{
    this.pokemon1Sub$.next(value);
  }
  public isPokemon2(value: boolean): void{
    this.pokemon2Sub$.next(value);
  }

  public dataPokemon1(data: ResponsePokemon): void{
    this.pokemon1DataSub$.next(data);
  }
  public dataPokemon2(data: ResponsePokemon): void{
    this.pokemon2DataSub$.next(data);

  }
}
