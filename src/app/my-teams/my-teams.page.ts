import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.page.html',
  styleUrls: ['./my-teams.page.scss'],
})
export class MyTeamsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goToTournaments(){
    this.navCtrl.navigateForward('tournaments');
  }

}
