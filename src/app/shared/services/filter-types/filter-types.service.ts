import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FilterTypesService {
    constructor() {}

    public setGoalByType(type: string): string {
        switch (type) {
            case '1':
                return 'Comprar algo';
            case '2':
                return 'Viajar';
            case '3':
                return 'Hacer algo';
            case '4':
                return 'Solo ahorrar';
        }
    }

    public setRuleByType(type: number): string {
        switch (type) {
            case 1:
                return 'Jugar';
            case 2:
                return 'Ganar';
            case 3:
                return 'Por gol';
        }
    }
}
