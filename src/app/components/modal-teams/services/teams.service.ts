import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class TeamsService {
    constructor(private httpService: HttpClient) {}

    public getTeams(): Observable<any> {
        return this.httpService.get<any>(`${environment.apiURL}teams`).pipe(
            map((res) => {
                const teams = res.teams.map((team) => ({
                    idTeam: team.id,
                    name: team.name,
                    imgUrl: team.crestUrl,
                    website: team.website,
                }));
                const { id, name, code } = res.competition;
                console.log({
                    teams,
                    idComp: id,
                    nameComp: name,
                    codeComp: code,
                });

                return { teams, idComp: id, nameComp: name, codeComp: code };
            })
        );
    }
}
