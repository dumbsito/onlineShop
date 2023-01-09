import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from 'src/app/components/checkout/checkout.component';
import { ContactoComponent } from 'src/app/components/contacto/contacto.component';
import { InicioComponent } from 'src/app/components/inicio/inicio.component';
import { NosotrosComponent } from 'src/app/components/nosotros/nosotros.component';
import { ProductsComponent } from 'src/app/components/products/products.component';

const routes: Routes = [
  {
    path:"",
    children:[
  {path:"",component:ProductsComponent},
  {path:"inicio",component:InicioComponent},
  {path:"productos",component:ProductsComponent},
  {path:"nosotros",component:NosotrosComponent},
  {path:"contacto",component:ContactoComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"**",redirectTo:"productos"}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
