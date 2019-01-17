import { Component, OnInit } from '@angular/core';
import {LoadingController, NavController} from "@ionic/angular";
import {Tournament} from "./tournament";
import {EliteAPIService} from "../shared/elite-api.service";

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.page.html',
  styleUrls: ['./tournaments.page.scss'],
})
export class TournamentsPage implements OnInit {
  private tournaments: Tournament[];
  constructor(private navCtrl: NavController,
              private eliteAPI: EliteAPIService,
              private loader: LoadingController
  ) { }

  // ngOnInit() {
  //   this.eliteAPI.getTournaments().subscribe(data => this.tournaments = data);
  // }
  async ngOnInit() {
    this.eliteAPI.getTournaments().subscribe(data => {
      this.tournaments = data;
      this.loader.dismiss();
    });
  }

  goBack(): void{
    this.navCtrl.goBack();
  }

  itemTapped(tourney: Tournament): void{
    this.navCtrl.navigateForward(['teams', { id: tourney.id }]);
  }

}
