import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime, ModalController } from '@ionic/angular';
import { add, format } from 'date-fns';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
    @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
    public rangeDates: { start: string; end: string };
    public selectedDate: string;

    constructor(public modalController: ModalController) {
        this.selectedDate = '';
    }

    ngOnInit() {
        this.generatedRangeDates();
    }

    public dismiss() {
        const date = format(new Date(this.datetime.value), 'yyyy-MM-dd');
        this.modalController.dismiss({
            dismissed: true,
            res: date,
        });
    }

    private leftDays(): void {}

    private generatedRangeDates(): void {
        const today = format(new Date(), 'yyyy-MM-dd');
        const last = add(new Date(), { days: 30 });
        this.rangeDates = {
            start: today,
            end: format(last, 'yyyy-MM-dd'),
        };
        console.log(this.rangeDates);
    }
}
