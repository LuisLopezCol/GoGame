import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ----------------- DATA FETCH
import { HttpClientModule } from '@angular/common/http';

// ----------------- MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'

// ----------------- COMPONENTS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './tools/navbar/navbar.component';
import { FooterComponent } from './tools/footer/footer.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductsComponent } from './pages/products/products.component';
import { FormSearchComponent } from './tools/form-search/form-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    ProductsComponent,
    FormSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
