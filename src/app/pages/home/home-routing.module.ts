import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home.page';

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
        children: [
            {
                path: 'metas',
                loadChildren: () =>
                    import('../goals/goals.module').then((m) => m.GoalsModule),
            },
            // {
            //     path: '',
            //     redirectTo: '/tabs/tab1',
            //     pathMatch: 'full',
            // },
        ],
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
export class HomePageRoutingModule {}
