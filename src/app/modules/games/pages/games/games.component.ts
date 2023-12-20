import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
} from '@angular/core';
import { takeUntil } from 'rxjs';
import { Game } from '../../../../core/models/game';
import { AutoDestroyService } from '../../../../core/services/utils/auto-destroy.service';
import { GameSearchService } from '../../services/game-search.service';
import { GameComponent } from '../../components/game/game.component';

@Component({
  selector: 'app-games',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GameComponent],
  providers: [AutoDestroyService],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss',
})
export class GamesComponent implements OnInit {
  $games: Signal<Game[]> = this.gameSearchService.$games;
  constructor(
    private gameSearchService: GameSearchService,
    private destroy$: AutoDestroyService
  ) {}

  ngOnInit(): void {
    this.gameSearchService
      .getGames()
      .pipe(takeUntil(this.destroy$))
      .subscribe((games: Game[]) => this.gameSearchService.setGames(games));
  }
}
