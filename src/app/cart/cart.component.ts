import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  products!: Product[];

  ngOnInit(): void {
    let cart = localStorage.getItem("cart");
    let cartArr = [];
    if(cart) {
      cartArr = JSON.parse(cart);
    }
    this.products = cartArr;
  }

}
