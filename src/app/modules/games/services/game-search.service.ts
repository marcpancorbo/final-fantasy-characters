import { Injectable, WritableSignal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from '../../../core/models/base-api-service';
import { Game } from '../../../core/models/game';

@Injectable({
  providedIn: 'root',
})
export class GameSearchService extends BaseApiService {
  $games: WritableSignal<Game[]> = signal([]);
  constructor() {
    super('games');
  }

  public getGames(): Observable<Game[]> {
    return super.get('');
  }
  public setGames(games: Game[]): void {
    this.$games.set(games);
  }
}
