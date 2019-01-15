import { Injectable } from '@angular/core';
import { Team } from './teams/team';

@Injectable({
  providedIn: 'root'
})
export class SelectedTeamService {

  team: Team;

  constructor() {
  }
}