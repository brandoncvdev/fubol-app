import { TestBed } from '@angular/core/testing';

import { BasicToastService } from './basic-toast.service';

describe('BasicToastService', () => {
    let service: BasicToastService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BasicToastService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
