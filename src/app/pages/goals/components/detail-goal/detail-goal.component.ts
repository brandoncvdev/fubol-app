import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FilterTypesService } from 'src/app/shared/services/filter-types/filter-types.service';
import {
    Rule,
    RulesService,
} from 'src/app/shared/services/rules/rules.service';
import { TYPESGOALS } from '../../../../shared/consts/types-goals';
import {
    GoalsService,
    Goal,
} from '../../../../shared/services/goals/goals.service';

@Component({
    selector: 'app-detail-goal',
    templateUrl: './detail-goal.component.html',
    styleUrls: ['./detail-goal.component.scss'],
})
export class DetailGoalComponent implements OnInit {
    public backButton: boolean;
    public typesGoals: { name: string; value: number }[];
    public goal: Observable<Goal>;
    public rulesToShow: Observable<Rule[]>;
    private idDoc: string;

    constructor(
        private route: ActivatedRoute,
        private rules: RulesService,
        private goals: GoalsService,
        private filters: FilterTypesService
    ) {
        this.backButton = true;
        this.idDoc = null;
        this.route.queryParams.subscribe((res) => {
            this.idDoc = res.id;
        });
        this.typesGoals = TYPESGOALS;
    }

    ngOnInit() {
        this.getGoal();
        this.getRules();
    }

    public filterGoals(type: string): string {
        return this.filters.setGoalByType(type);
    }

    public filterRules(type: number): string {
        return this.filters.setRuleByType(type);
    }

    private getGoal(): void {
        this.goal = this.goals.getGoal(this.idDoc);
    }

    private getRules(): void {
        this.rulesToShow = this.rules.getListRules();
        // this.rules.getSpecificRules(this.idDoc).subscribe((res) => {
        //     console.log(res);
        // });
    }
}
