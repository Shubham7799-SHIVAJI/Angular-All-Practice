import { CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller-service';
import { inject, Inject } from '@angular/core';
import { Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  const sellerservice=inject(SellerService)
  const router=inject(Router)
  if(localStorage.getItem('seller')){
    return true;
  }
  return sellerservice.isSellerLoggedIn;
  // if(sellerservice.isSellerLoggedIn){
  //   return true;
  // }
  // else{
  //   return router.navigate(['/'])
  // }
};
