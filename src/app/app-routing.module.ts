import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ----------------- COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'},
  {path:'', component: HomeComponent},
  {path:'products', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
