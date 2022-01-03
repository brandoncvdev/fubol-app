import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
    GoalsService,
    Goal,
} from 'src/app/shared/services/goals/goals.service';
import { Observable, Subscription } from 'rxjs';
import { BasicToastService } from 'src/app/shared/services/toasts/basic-toast.service';

@Component({
    selector: 'app-goals',
    templateUrl: './goals.page.html',
    styleUrls: ['./goals.page.scss'],
})
export class GoalsComponent implements OnInit, OnDestroy {
    public listGoals: Observable<Goal[]>;
    private subscriptions: Subscription[];

    constructor(
        private router: Router,
        private goals: GoalsService,
        public basicToast: BasicToastService
    ) {
        this.listGoals = new Observable();
        this.subscriptions = [];
    }

    ngOnInit() {
        this.getListGoals();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }

    public redirectToCreate(): void {
        console.log('working redirect ');

        this.router.navigateByUrl('home/metas/crear');
    }

    public setGoalByType(type: string): string {
        switch (type) {
            case '1':
                return 'Comprar algo';
            case '2':
                return 'Viajar';
            case '3':
                return 'Hacer algo';
            case '4':
                return 'Solo ahorrar';
        }
    }

    public deleteGoal(id: string): void {
        console.log('Borrando');
        this.goals.deleteRule(id).then((res) => {
            console.log(res);
            this.basicToast.messageToast('Regla guardada');
        });
    }

    private getListGoals(): void {
        this.listGoals = this.goals.getListGoals();
    }
}
