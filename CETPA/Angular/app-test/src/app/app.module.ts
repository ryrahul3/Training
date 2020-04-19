import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ProductComponent } from './views/product/product.component';
import { RouterModule } from '@angular/router';
import { MenusComponent } from './views/defaultpage/menus/menus.component';
import { SidebarComponent } from './views/defaultpage/sidebar/sidebar.component';
import { HeaderComponent } from './views/defaultpage/header/header.component';
import { FooterComponent } from './views/defaultpage/footer/footer.component';
import { LimittoPipe } from './pipes/limitto.pipe';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { AttrDirective } from './directive/attr.directive';
import { StrDirective } from './directive/str.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ProductComponent,
    MenusComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    LimittoPipe,
    ContactUsComponent,
    AttrDirective,
    StrDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
