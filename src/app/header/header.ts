import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
    menuType: string = 'default';
  sellerName:string="";
  constructor(private router:Router) { }
  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          let sellerStore=localStorage.getItem('seller');
          let sellerData=sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName=sellerData.name; 
          this.menuType='seller';
        }else{
          this.menuType='default'
        }
      }
    })  
}
  logout(){
    localStorage.removeItem('seller');
    this.router.navigate(['']);
    this.menuType='default';
  } 

}
