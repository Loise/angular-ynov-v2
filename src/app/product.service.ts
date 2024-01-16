import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      "Peluche Harry Potter",
      "Peluche certifiée OEKO-TEX, coton bio issue du commerce équitable, taille 12 cm ",
      "https://media.auchan.fr/42f06d04-cd4f-4cf0-8d86-48c56c856e31_512x512/B2CD/",
      2300,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      2,
      "Peluche Ronnald Weasley",
      "Peluche certifiée OEKO-TEX, coton bio issue du commerce équitable, taille 12 cm ",
      "https://media.auchan.fr/0f9dcc51-564c-45d8-bda1-a27cf1db4703_512x512/B2CD/",
      2300,
      0,
      false,
      new Date('2022-02-27'),
      ['XL', 'L']
    )
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getOneProduct(id: number): Product {
    let res = this.products.find((p) => p.id === id)
    if(res) {
      return res;
    } else {
      throw new Error("Product not found")
    }
  }

  constructor() { }
}
