import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsPageRoutingModule } from './goals-routing.module';
import { IonicModule } from '@ionic/angular';
import { GoalsComponent } from './goals.page';
import { TeamsService } from '../../components/modal-teams/services/teams.service';
import { HeaderModule } from 'src/app/components/header/header.module';
import { CrearMetasComponent } from './components/crear-metas/crear-metas.component';
import { ModalModule } from '../../components/modal/modal.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoalsService } from '../../shared/services/goals/goals.service';
import { RouterModule } from '@angular/router';
import { CreateRuleComponent } from './components/create-rule/create-rule.component';
import { ModalTeamsModule } from '../../components/modal-teams/modal-teams.module';
import { DetailGoalComponent } from './components/detail-goal/detail-goal.component';

@NgModule({
    declarations: [
        GoalsComponent,
        CrearMetasComponent,
        CreateRuleComponent,
        DetailGoalComponent,
    ],
    imports: [
        CommonModule,
        TeamsPageRoutingModule,
        IonicModule,
        HeaderModule,
        ModalModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ModalTeamsModule,
    ],
    providers: [TeamsService, GoalsService],
})
export class GoalsModule {}
