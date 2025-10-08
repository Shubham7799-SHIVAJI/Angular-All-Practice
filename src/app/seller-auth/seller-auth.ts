import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { SellerService } from '../services/seller-service';
import { login, signUp } from '../data-types';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule,CommonModule],
  templateUrl: './seller-auth.html',
  styleUrl: './seller-auth.css',
  standalone:true
  
})
export class SellerAuth {
  showLogin=false;
   authError:String='';
  constructor(private seller:SellerService,private router:Router){

  }
  ngOnInit():void{
    this.seller.reloadSeller();
    
   
  }
  signUp(data:signUp):void{
    console.log(data);
    this.seller.userSignUp(data);

  }
  openLogin(){
    this.showLogin=true;
  }
  openSignUp(){
    this.showLogin=false;
  }
  login(data: signUp): void {
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct";
      }
    })
  }
}
