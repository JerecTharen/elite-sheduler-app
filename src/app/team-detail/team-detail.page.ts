import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {SelectedTeamService} from "../selected-team.service";
import {Team} from "../teams/team";

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage implements OnInit {

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private selectedTeamService: SelectedTeamService) {
    console.log('**nav params:', this.team.id);
  }

  ngOnInit() {
  }

  goBack(): void{
    this.navCtrl.goBack();
  }

  get team(): Team{
    return this.selectedTeamService.team;
  }

}
