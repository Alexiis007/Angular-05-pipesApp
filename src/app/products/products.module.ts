import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { NumbersPagesComponent } from './pages/numbers-pages/numbers-pages.component';
import { UncommonPagesComponent } from './pages/uncommon-pages/uncommon-pages.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pages/order/Pipes/toggle-case.pipe';
import { CantFlyPipe } from './pages/order/Pipes/cantFly.pipe';
import { SortByPipe } from './pages/order/Pipes/sort-by.pipe';


@NgModule({
  declarations: [
    CantFlyPipe,
    BasicPagesComponent,
    NumbersPagesComponent,
    UncommonPagesComponent,
    OrderComponent,
    ToggleCasePipe,
    SortByPipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
  ]
})
export class ProductsModule { }
