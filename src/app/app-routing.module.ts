import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-teams',
    pathMatch: 'full'
  },
  { path: 'game', loadChildren: './game/game.module#GamePageModule' },
  { path: 'my-teams', loadChildren: './my-teams/my-teams.module#MyTeamsPageModule' },
  { path: 'teams', loadChildren: './teams/teams.module#TeamsPageModule' },
  { path: 'tournaments', loadChildren: './tournaments/tournaments.module#TournamentsPageModule' },
  { path: 'team-home', loadChildren: './team-home/team-home.module#TeamHomePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
