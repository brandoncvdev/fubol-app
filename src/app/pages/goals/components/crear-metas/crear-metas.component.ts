import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ModalComponent } from '../../../../components/modal/modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoalsService } from '../../../../shared/services/goals/goals.service';
import { BasicToastService } from 'src/app/shared/services/toasts/basic-toast.service';

@Component({
    selector: 'app-crear-metas',
    templateUrl: './crear-metas.component.html',
    styleUrls: ['./crear-metas.component.scss'],
})
export class CrearMetasComponent implements OnInit {
    public typesGoals: { name: string; value: string }[];
    public form: FormGroup;
    public backButton = true;

    constructor(
        private modalController: ModalController,
        private routerOutlet: IonRouterOutlet,
        private formBuilder: FormBuilder,
        public basicToast: BasicToastService,
        private goals: GoalsService
    ) {
        this.typesGoals = [
            { name: 'Comprar algo', value: '1' },
            { name: 'Viajar', value: '2' },
            { name: 'Hacer algo', value: '3' },
            { name: 'Solo ahorrar', value: '4' },
        ];
    }

    ngOnInit() {
        this.formGoal();
    }

    public async openDatesModal(): Promise<any> {
        const modal = await this.modalController.create({
            component: ModalComponent,
            cssClass: 'modal-dates',
            swipeToClose: true,
            presentingElement: this.routerOutlet.nativeEl,
        });
        modal.present();
        const { data } = await modal.onWillDismiss();
        this.form.patchValue({ time: data.res });
        console.log(data);
    }

    public getValuesForm(): void {
        this.form.patchValue({ time: '2022-02-12' });
        const valuesForm = this.form.value;
        const invalidForm = this.form.invalid;
        if (invalidForm) {
            this.basicToast.messageToast('Rellena todos los campos');
        } else {
            this.goals.createGoal(valuesForm).then((res) => {
                console.log(res);
            });
            this.form.markAsTouched();
            this.form.reset();
            this.basicToast.messageToast('Meta guardada');
        }
    }

    private formGoal(): void {
        this.form = this.formBuilder.group({
            type: [null, Validators.compose([Validators.required])],
            time: [null, Validators.compose([Validators.required])],
            notes: null,
            amount: [
                null,
                Validators.compose([Validators.required, Validators.min(1)]),
            ],
        });
    }
}
