import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { ProductsDetailGuard } from '../guard/products-detail.guard';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [

    ProductListComponent,

    ProductDetailComponent,
  ],
  imports: [
   
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'product/:id',
        canActivate: [ProductsDetailGuard],
        component: ProductDetailComponent
      },

    ]),
  SharedModule
  ]
})
export class ProductModule { }
