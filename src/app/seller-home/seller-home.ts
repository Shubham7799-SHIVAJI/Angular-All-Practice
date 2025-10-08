import { Component } from '@angular/core';
import { ProductService } from '../services/product-service';
import { product } from '../data-types';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
// import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-seller-home',
  imports: [CommonModule],
  templateUrl: './seller-home.html',
  styleUrl: './seller-home.css'
})
export class SellerHome implements OnInit {
productList: undefined | product[];
  productMessage: undefined | string;
  // icon = faTrash;
  // iconEdit=faEdit;
  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.product.productList().subscribe((result) => {
      if (result) {
        console.warn(result);
        this.productList = result;
      }
    });
  }

  // deleteProduct(id: number) {
  //   this.product.deleteProduct(id).subscribe((result) => {
  //     if (result) {
  //       this.productMessage = 'Product is deleted';

  //       this.list();
  //     }
  //   });
  //   setTimeout(() => {
  //     this.productMessage = undefined;
  //   }, 3000);
  // }

  // list() {
  //   this.product.productList().subscribe((result) => {
  //     if (result) {
  //       this.productList = result;
  //     }
  //   });
  // }
}
