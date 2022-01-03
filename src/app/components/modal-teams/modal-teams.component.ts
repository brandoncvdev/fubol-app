import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { TeamsService } from './services/teams.service';

@Component({
    selector: 'app-modal-teams',
    templateUrl: './modal-teams.component.html',
    styleUrls: ['./modal-teams.component.scss'],
})
export class ModalTeamsComponent implements OnInit {
    public teamsLocal$: Observable<any>;

    constructor(
        private teams: TeamsService,
        private modalController: ModalController
    ) {
        this.teamsLocal$ = new Observable();
    }

    ngOnInit() {
        this.getTeamsLegue();
    }

    public teamSelected(data: any): void {
        console.log('working');
        this.modalController.dismiss({ data });
    }

    private getTeamsLegue(): void {
        this.teamsLocal$ = this.teams.getTeams();
    }
}
