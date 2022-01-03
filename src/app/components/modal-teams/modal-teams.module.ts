import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalTeamsComponent } from './modal-teams.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [ModalTeamsComponent],
    imports: [CommonModule, IonicModule],
    exports: [ModalTeamsComponent],
})
export class ModalTeamsModule {}
