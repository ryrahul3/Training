import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MainComponent } from './pages/main/main.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LimittoPipe } from './pipes/limitto.pipe';
import { SubstrPipe } from './pipes/substr.pipe';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AttrDirective } from './directive/attr.directive';
import { StrDirective } from './directive/str.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MainComponent,
    SidebarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    LimittoPipe,
    SubstrPipe,
    AttrDirective,
    StrDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
