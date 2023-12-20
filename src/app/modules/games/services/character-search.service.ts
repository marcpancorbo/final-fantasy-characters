import { HttpParams } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { BaseApiService } from '../../../core/models/base-api-service';
import { Character } from '../../../core/models/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterSearchService extends BaseApiService {
  gameNumbers: { [key: string]: string } = {
    ['01']: '',
    ['02']: 'II',
    ['03']: 'III',
    ['04']: 'IV',
    ['05']: 'V',
    ['06']: 'VI',
    ['07']: 'VII',
    ['08']: 'VIII',
    ['09']: 'IX',
    ['10']: 'X',
  };
  $loading: WritableSignal<boolean> = signal(false);
  $characters: WritableSignal<Character[]> = signal([]);
  constructor() {
    super('characters');
  }
  private getGameTitle(gameTitle: string) {
    const gameNumber = gameTitle.split(' ')[2];
    return `Final Fantasy ${this.gameNumbers[gameNumber]}` ?? '';
  }
  getCharacters(gameTitle: string): Observable<Character[]> {
    this.$loading.set(true);
    const params: HttpParams = new HttpParams().set(
      'origin',
      this.getGameTitle(gameTitle)
    );
    return super
      .get('/search', { params })
      .pipe(finalize(() => this.$loading.set(false)));
  }
  setCharacters(characters: Character[]): void {
    this.$characters.set(characters);
  }
}
