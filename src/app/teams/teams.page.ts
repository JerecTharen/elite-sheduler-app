import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {Team} from "./team";
import {SelectedTeamService} from "../selected-team.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  private teams: Team[] = [
    {id: 1, name: 'HC Elite'},
    {id: 2, name: 'Team Takeover'},
    {id: 3, name: 'DC Thunder'}
  ];
  constructor(private navCtrl: NavController, private selectedTeamService: SelectedTeamService) { }

  ngOnInit() {
  }

  goBack(): void{
    this.navCtrl.goBack();
  }

  itemTapped(team: Team): void{
    this.selectedTeamService.team = team;
    this.navCtrl.navigateForward(['team-home', {id: team.id}]);
  }

}
