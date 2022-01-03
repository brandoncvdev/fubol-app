import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class BasicToastService {
    constructor(public toastController: ToastController) {}

    public async messageToast(text: string) {
        const toast = await this.toastController.create({
            message: text,
            duration: 2000,
        });
        toast.present();
    }
}
