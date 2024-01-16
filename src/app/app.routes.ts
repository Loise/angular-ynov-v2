import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'cart', component: CartComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: '**', component: ErrorComponent }
];
