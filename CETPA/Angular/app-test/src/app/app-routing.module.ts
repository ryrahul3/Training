import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ProductComponent } from './views/product/product.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo:'about-us',pathMatch:'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule { }
