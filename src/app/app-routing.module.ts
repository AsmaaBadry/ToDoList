import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NoFoundPageComponent } from './no-found-page/no-found-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  { path: '', component: ProductListComponent },
   { path: 'product-details/:id', component: ProductDetailsComponent },


  // {
  //   path:'Products' ,
  //   children:[{path:'' , component:ProductListComponent},
  //   {
  //     path: ':id',
  //     component: ProductDetailsComponent,
  //   }
  // ]
  // },
  {
    path:'Cart' , component:CartComponent,
    canActivate:[AuthGuardGuard]
  },
  {
    path:'Products' , component:ProductListComponent
  },
  {
    path:'Login' , component:LoginComponent
  },
  {
    path:'Register' , component:RegisterComponent
  },
  {
    path:'**' , component:NoFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
