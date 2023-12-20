import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '../../../../core/models/character';

@Component({
  selector: 'app-game-character',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './game-character.component.html',
  styleUrl: './game-character.component.scss',
})
export class GameCharacterComponent {
  @Input({ required: true }) character: Character;
}
