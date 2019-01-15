import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {SelectedTeamService} from "../selected-team.service";

@Component({
  selector: 'app-team-home',
  templateUrl: './team-home.page.html',
  styleUrls: ['./team-home.page.scss'],
})
export class TeamHomePage implements OnInit {

  constructor(private navCtrl: NavController, private selectedTeamService: SelectedTeamService) { }

  ngOnInit() {
  }

  get name(): string{
    return this.selectedTeamService.team.name;
  }

  goBack(): void{
    this.navCtrl.goBack();
  }

}
