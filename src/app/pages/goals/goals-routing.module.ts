import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsComponent } from './goals.page';
import { CrearMetasComponent } from './components/crear-metas/crear-metas.component';
import { CreateRuleComponent } from './components/create-rule/create-rule.component';
import { DetailGoalComponent } from './components/detail-goal/detail-goal.component';

const routes: Routes = [
    {
        path: '',
        component: GoalsComponent,
        data: {
            title: 'Metas',
        },
    },
    {
        path: 'crear',
        component: CrearMetasComponent,
    },
    {
        path: 'crear-regla',
        component: CreateRuleComponent,
    },
    {
        path: 'detalle',
        component: DetailGoalComponent,
    },
    {
        path: '',
        redirectTo: '/home/metas',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class TeamsPageRoutingModule {}
