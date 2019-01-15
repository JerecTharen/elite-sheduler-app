import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeamHomePage } from './team-home.page';

const routes: Routes = [
  {
    path: '',
    component: TeamHomePage,
    children: [
      {
        path: 'team-detail',
        children: [
          {
            path: '',
            loadChildren: '../team-detail/team-detail.module#TeamDetailPageModule'
          }
        ]
      },
      {
        path: 'standings',
        children: [
          {
            path: '',
            loadChildren: '../standings/standings.module#StandingsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/team-home/team-detail',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/team-home/team-detail',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeamHomePage]
})
export class TeamHomePageModule {}
