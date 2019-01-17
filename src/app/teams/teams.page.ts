import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {Team} from "./team";
import {SelectedTeamService} from "../selected-team.service";
import {EliteAPIService} from "../shared/elite-api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  private teams: Team[] = [];
  constructor(
      private navCtrl: NavController,
      private selectedTeamService: SelectedTeamService,
      private eliteAPI: EliteAPIService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const selectedTourney = this.route.snapshot.paramMap.get('id');
    console.log(selectedTourney);
    this.eliteAPI.getTournamentData(selectedTourney).subscribe(data => this.teams = data.teams);
    console.log(this.teams);
  }

  goBack(): void{
    this.navCtrl.goBack();
  }

  itemTapped(team: Team): void{
    this.selectedTeamService.team = team;
    this.navCtrl.navigateForward(['team-home', {id: team.id}]);
  }

}
