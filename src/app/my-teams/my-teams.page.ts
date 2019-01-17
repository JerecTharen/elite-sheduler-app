import { Component, OnInit } from '@angular/core';
import {LoadingController, NavController} from "@ionic/angular";

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.page.html',
  styleUrls: ['./my-teams.page.scss'],
})
export class MyTeamsPage implements OnInit {

  constructor(private navCtrl: NavController, private loader: LoadingController) { }

  ngOnInit() {
  }
  // goToTournaments(){
  //   this.navCtrl.navigateForward('tournaments');
  // }

  async goToTournaments() {
    const loading = await this.loader.create({
      message: 'Getting tournaments...'
    });
    loading.present().then(_ => {
      this.navCtrl.navigateForward('tournaments');
    });
  }

}
