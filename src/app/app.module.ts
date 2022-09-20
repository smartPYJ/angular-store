import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './product/product.module';
@NgModule({
  declarations:
  [
    AppComponent,
    WelcomeComponent
  ],
  imports: [BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot( [
    
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full' },
     {path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
    ProductModule,

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
