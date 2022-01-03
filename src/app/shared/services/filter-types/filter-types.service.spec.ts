import { TestBed } from '@angular/core/testing';

import { FilterTypesService } from './filter-types.service';

describe('FilterTypesService', () => {
    let service: FilterTypesService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FilterTypesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
