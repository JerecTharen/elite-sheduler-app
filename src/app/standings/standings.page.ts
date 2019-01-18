import { Component, OnInit } from '@angular/core';
import { EliteAPIService } from '../shared/elite-api.service';
import * as _ from 'lodash';
import { SelectedTeamService } from '../selected-team.service';
import { Team } from '../teams/team';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.page.html',
  styleUrls: ['./standings.page.scss'],
})
export class StandingsPage implements OnInit {
  standings: any;
  allStandings: any[];
  private team: Team;

  constructor(
      private eliteAPI: EliteAPIService,
      private selectedTeam: SelectedTeamService
  ) { }

  ngOnInit() {
    this.team = this.selectedTeam.team;
    const tourneyData = this.eliteAPI.getCurrentTourney();
    this.standings = tourneyData.standings;

    this.allStandings = _.chain(this.standings)
        .groupBy('division')
        .toPairs()
        .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
        .value();

    console.log('standings:', this.standings);
    console.log('division standings', this.allStandings);
  }

}
