import { TestBed } from '@angular/core/testing';

import { SellerService } from './seller-service';
// import { HttpTestingController } from '@angular/common/http/testing';
// import { signUp,login } from '../data-types';
// import { Router } from '@angular/router';

describe('SellerService', () => {
  let service: SellerService;
  
  beforeEach(() => {
    const spy = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerService);
    
    
  });
   

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  


});
