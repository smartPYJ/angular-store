import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListComponent } from './product/product-list.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MycurrencyPipe } from 'src/custom.currencypipe';
@NgModule({
  declarations: [AppComponent ,
    ProductListComponent,
    MycurrencyPipe
  ],
  imports: [BrowserModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
