import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:"inicio",component:InicioComponent},
  {path:"",component:ProductsComponent},
  {path:"productos",component:ProductsComponent},
  {path:"nosotros",component:NosotrosComponent},
  {path:"contacto",component:ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
