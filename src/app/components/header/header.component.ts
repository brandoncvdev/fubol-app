import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    @Input() title: string;
    @Input() backButton: boolean;

    constructor(private location: Location) {
        this.title = 'Default title';
        this.backButton = false;
    }

    public backLocation(): void {
        this.location.back();
    }
}
