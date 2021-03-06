import { Component, OnInit } from '@angular/core';
import {LoadingController, NavController} from "@ionic/angular";
import {EliteAPIService} from "../shared/elite-api.service";
import {Team} from "../teams/team";
import {Router} from "@angular/router";
import {SelectedTeamService} from "../selected-team.service";

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.page.html',
  styleUrls: ['./my-teams.page.scss'],
})
export class MyTeamsPage implements OnInit {

  favorites = [
    {
      team: { id: 6182, name: 'HC Elite 7th', coach: 'Michelotti' },
      tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
      tournamentName: 'March Madness Tournament'
    },
    {
      team: { id: 805, name: 'HC Elite', coach: 'Michelotti' },
      tournamentId: '98c6857e-b0d1-4295-b89e-2d95a45437f2',
      tournamentName: 'Holiday Hoops Challenge'
    }
  ];

  constructor(
      private navCtrl: NavController,
      private loader: LoadingController,
      private eliteAPI: EliteAPIService,
      private selectedTeam: SelectedTeamService,
      private router: Router
  ) {

  }

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

  async favoriteTapped(item){
    // console.log(item);
    const loading = await this.loader.create({message: 'Getting Data . . .'});
    loading.present().then(()=>{
      this.selectedTeam.team = item.team;
      this.eliteAPI.getTournamentData(item.tournamentId).subscribe(()=>{
        this.router.navigate(['team-home',{id: item.tournamentId}]);
      })
    });
  }

}
