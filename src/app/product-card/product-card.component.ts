import { Component, Input, booleanAttribute } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() myProduct!: Product;
  @Input({transform: booleanAttribute}) displayAddToCart!: boolean;

  constructor(private productsService: ProductService) {}

  addToCart() {
    let cart = localStorage.getItem("cart");
    let cartArr = [];
    if(cart) {
      cartArr = JSON.parse(cart);
    }
    cartArr.push(this.myProduct)
    localStorage.setItem("cart", JSON.stringify(cartArr))
  }
}
