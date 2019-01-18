import { Injectable } from '@angular/core';
import { environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Tournament} from "../tournaments/tournament";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EliteAPIService {

    currentTourney: any;

  constructor(private HttpClient: HttpClient) { }

  getTournaments(): Observable<Tournament[]> {
    return this.HttpClient.get<Tournament[]>(`${ environment.firebaseBaseUrl }/tournaments.json`);
  }

  getTournamentData(tourneyId): Observable<any> {
    return this.HttpClient.get(`${ environment.firebaseBaseUrl }/tournaments-data/${ tourneyId }.json`)
        .pipe(
            map(response => {
                this.currentTourney = response;
                return this.currentTourney;
            })
        );
  }

    getCurrentTourney() {
        return this.currentTourney;
    }

}
