import { Routes } from '@angular/router';
import { gameRoutes } from './modules/games/games.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full',
  },
  ...gameRoutes,
];
