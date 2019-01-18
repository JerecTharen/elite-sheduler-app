// import { Component, OnInit } from '@angular/core';
// import {NavController} from "@ionic/angular";
// import {ActivatedRoute} from "@angular/router";
// import {SelectedTeamService} from "../selected-team.service";
// import {Team} from "../teams/team";
//
// @Component({
//   selector: 'app-team-detail',
//   templateUrl: './team-detail.page.html',
//   styleUrls: ['./team-detail.page.scss'],
// })
// export class TeamDetailPage implements OnInit {
//
//   constructor(private navCtrl: NavController, private route: ActivatedRoute, private selectedTeamService: SelectedTeamService) {
//     console.log('**nav params:', this.team.id);
//   }
//
//   ngOnInit() {
//   }
//
//   goBack(): void{
//     this.navCtrl.goBack();
//   }
//
//   get team(): Team{
//     return this.selectedTeamService.team;
//   }
//
// }

import { Component, OnInit } from '@angular/core';
import { SelectedTeamService } from '../selected-team.service';
import { Team } from '../teams/team';
import { EliteAPIService } from '../shared/elite-api.service';
import * as _ from 'lodash';
// import {Moment} from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage implements OnInit {

  tourneyData: any;
  games: any[];
  teamStanding: any;
  dateFilter: string;
  allGames: any[];

  get team(): Team {
    return this.selectedTeam.team;
  }

  constructor(
      private selectedTeam: SelectedTeamService,
      public eliteApi: EliteAPIService
  ) {
    // console.log('**nav params:', this.team.id);
  }

  ngOnInit() {
    this.tourneyData = this.eliteApi.getCurrentTourney();

    this.games = _.chain(this.tourneyData.games)
        .filter(g => g.teamId === this.team.id || g.team2Id === this.team.id)
        .map(g => {
          const isTeam1 = (g.teamId === this.team.id);
          const opponentName = isTeam1 ? g.team2 : g.team1;
          const scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
          return {
            gameId: g.id,
            opponent: opponentName,
            time: Date.parse(g.time),
            location: g.location,
            locationUrl: g.locationUrl,
            scoreDisplay: scoreDisplay,
            homeAway: (isTeam1 ? 'vs.' : 'at')
          };
        })
        .value();
    this.allGames = this.games.slice();


    this.teamStanding = _.find(this.tourneyData.standings, {'teamId': this.team.id});
  }

  getScoreDisplay(isTeam1, team1Score, team2Score) {
    if (team1Score && team2Score) {
      const teamScore = (isTeam1 ? team1Score : team2Score);
      const opponentScore = (isTeam1 ? team2Score : team1Score);
      const winIndicator = teamScore > opponentScore ? 'W: ' : 'L: ';
      return winIndicator + teamScore + '-' + opponentScore;
    } else {
      return '';
    }
  }

  dateChanged(){
  // console.log('dateChanged trigguured', this.dateFilter);
  this.games = _.filter(this.allGames, g => moment(g.time).isSame(this.dateFilter, 'day'));
  }

}
