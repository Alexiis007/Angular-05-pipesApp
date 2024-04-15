import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { NumbersPagesComponent } from './pages/numbers-pages/numbers-pages.component';
import { UncommonPagesComponent } from './pages/uncommon-pages/uncommon-pages.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  {
    path:'',
    component:BasicPagesComponent
  },
  {
    path:'Numbers',
    component:NumbersPagesComponent
  },
  {
    path:'Uncommon',
    component:UncommonPagesComponent
  },
  {
    path:'Customs',
    component:OrderComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
