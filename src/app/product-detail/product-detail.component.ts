import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  id: number = 0;
  product!: Product;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    let idTmp = this.route.snapshot.paramMap.get('id')
    if (idTmp) {
      this.id = parseInt(idTmp)
      try {
        this.product = this.productService.getOneProduct(this.id)
      } catch (e) {
        this.router.navigate(['404'])
      }
    } else {
      this.router.navigate(['404'])
    }
  }
}
