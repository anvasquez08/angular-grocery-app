import { TestBed } from '@angular/core/testing';

import { GroceryDataServiceService } from './grocery-data-service.service';

describe('GroceryDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroceryDataServiceService = TestBed.get(GroceryDataServiceService);
    expect(service).toBeTruthy();
  });
});
