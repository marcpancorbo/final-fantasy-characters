import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs';
import { AutoDestroyService } from '../../../../core/services/utils/auto-destroy.service';
import { CharacterSearchService } from '../../services/character-search.service';
import { Character } from '../../../../core/models/character';
import { GameCharacterComponent } from '../../components/game-character/game-character.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@Component({
  selector: 'app-game-characters',
  standalone: true,
  providers: [AutoDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GameCharacterComponent, ProgressSpinnerModule],
  templateUrl: './game-characters.component.html',
  styleUrl: './game-characters.component.scss',
})
export class GameCharactersComponent implements OnInit {
  $characters: Signal<Character[]> = this.characterSearchService.$characters;
  $loading: Signal<boolean> = this.characterSearchService.$loading;
  constructor(
    private characterSearchService: CharacterSearchService,
    private activatedRoute: ActivatedRoute,
    private destroy$: AutoDestroyService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const title = params.get('gameTitle');
      if (!title) {
        return;
      }
      this.characterSearchService
        .getCharacters(title)
        .pipe(takeUntil(this.destroy$))
        .subscribe((characters) =>
          this.characterSearchService.setCharacters(characters)
        );
    });
  }
}
