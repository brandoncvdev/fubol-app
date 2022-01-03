import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home.page';

@NgModule({
    declarations: [HomePageComponent],
    imports: [CommonModule, IonicModule, HomePageRoutingModule],
})
export class HomeModule {}
