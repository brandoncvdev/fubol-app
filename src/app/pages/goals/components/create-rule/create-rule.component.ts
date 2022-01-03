import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ModalTeamsComponent } from 'src/app/components/modal-teams/modal-teams.component';
import { RulesService } from '../../../../shared/services/rules/rules.service';
import { BasicToastService } from 'src/app/shared/services/toasts/basic-toast.service';

@Component({
    selector: 'app-create-rule',
    templateUrl: './create-rule.component.html',
    styleUrls: ['./create-rule.component.scss'],
})
export class CreateRuleComponent implements OnInit {
    public typesGoals: { name: string; value: number }[];
    public form: FormGroup;
    public backButton = true;
    public teamsSelected: any[];
    private idDoc: string;
    private idTeam: number;

    constructor(
        public basicToast: BasicToastService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private modalController: ModalController,
        private routerOutlet: IonRouterOutlet,
        private rules: RulesService
    ) {
        this.route.queryParams.subscribe((res) => {
            this.idDoc = res.id;
        });
        this.typesGoals = [
            { name: 'Jugar', value: 1 },
            { name: 'Ganar', value: 2 },
            { name: 'Por gol', value: 3 },
        ];
        this.teamsSelected = [];
        this.idTeam = null;
    }

    ngOnInit() {
        this.formRules();
    }

    public async openTeamsModal(): Promise<any> {
        const modal = await this.modalController.create({
            component: ModalTeamsComponent,
            cssClass: 'modal-rules',
            swipeToClose: true,
            presentingElement: this.routerOutlet.nativeEl,
        });
        modal.present();
        modal.onWillDismiss().then((res) => {
            console.log(res);
            const { data } = res;
            this.idTeam = data.data.idTeam;
            this.teamsSelected = [data.data];
        });
    }

    public submitForm(): void {
        this.form.patchValue({ team: this.idTeam, idDoc: this.idDoc });
        const valuesForm = this.form.value;
        const invalidForm = this.form.invalid;
        console.log(valuesForm);

        if (invalidForm) {
            this.basicToast.messageToast('Rellena todos los campos');
        } else {
            this.rules.createRule(valuesForm).then((res) => {
                console.log(res);
            });
            this.form.markAsTouched();
            this.form.reset();
            this.teamsSelected = [];
            this.basicToast.messageToast('Meta guardada');
        }
    }

    private formRules(): void {
        this.form = this.formBuilder.group({
            team: [null, Validators.compose([Validators.required])],
            event: [null, Validators.compose([Validators.required])],
            amount: [
                null,
                Validators.compose([Validators.required, Validators.min(1)]),
            ],
            idDoc: [null, Validators.compose([Validators.required])],
        });
    }
}
