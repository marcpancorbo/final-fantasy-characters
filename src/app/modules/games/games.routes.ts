import { Routes } from '@angular/router';

export const gameRoutes: Routes = [
  {
    path: 'games',
    loadComponent: () =>
      import('./pages/games/games.component').then((c) => c.GamesComponent),
  },
  {
    path: 'games/:gameTitle',
    loadComponent: () =>
      import('./pages/game-characters/game-characters.component').then(
        (c) => c.GameCharactersComponent
      ),
  },
];
