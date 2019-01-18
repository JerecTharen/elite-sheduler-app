import { Component, OnInit } from '@angular/core';
import {LoadingController, NavController} from "@ionic/angular";
import {Team} from "./team";
import {SelectedTeamService} from "../selected-team.service";
import {EliteAPIService} from "../shared/elite-api.service";
import {ActivatedRoute} from "@angular/router";
import * as _ from 'lodash';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  private teams: Team[] = [];
  private allTeams: Team[];
  private allTeamDivisions: any;
  constructor(
      private navCtrl: NavController,
      private selectedTeamService: SelectedTeamService,
      private eliteAPI: EliteAPIService,
      private route: ActivatedRoute,
      private loader: LoadingController
  ) { }

  async ngOnInit() {
    const selectedTourney = this.route.snapshot.paramMap.get('id');
    const loading = await this.loader.create({
      message: 'Getting data...'
    });

    loading.present().then(() => {
      this.eliteAPI.getTournamentData(selectedTourney).subscribe(data => {
        this.allTeams = data.teams;
        this.allTeamDivisions = _
            .chain(data.teams)
            .groupBy('division')
            .toPairs()
            .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
            .value();
        this.teams = this.allTeamDivisions;
        console.log('division teams', this.teams);
        loading.dismiss();
      });
    });
  }

  goBack(): void{
    this.navCtrl.goBack();
  }

  itemTapped(team: Team): void{
    this.selectedTeamService.team = team;
    this.navCtrl.navigateForward(['team-home', {id: team.id}]);
  }

}
