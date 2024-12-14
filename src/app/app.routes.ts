import { Routes } from '@angular/router';
import { CatalystComponent } from './page/catalyst/catalyst.component';

export const routes: Routes = [
  {
    path: 'catalyst',
    component: CatalystComponent
  },
  {
    path: '**',
    redirectTo: 'catalyst'
  }
];
