import { Component, OnInit } from '@angular/core';
import {LoadingController, NavController} from "@ionic/angular";
import {SelectedTeamService} from "../selected-team.service";

@Component({
  selector: 'app-team-home',
  templateUrl: './team-home.page.html',
  styleUrls: ['./team-home.page.scss'],
})
export class TeamHomePage implements OnInit {

  constructor(
      private navCtrl: NavController,
      private selectedTeamService: SelectedTeamService,
      private loader: LoadingController
  ) { }

  ngOnInit() {
    this.loader.dismiss();
  }

  get name(): string{
    return this.selectedTeamService.team.name;
  }

  goBack(): void{
    this.navCtrl.goBack();
  }

}
