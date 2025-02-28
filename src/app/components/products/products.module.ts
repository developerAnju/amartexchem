import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
// import { ProductsComponent } from './products.component';
import { ZdhcexportCertifiedComponent } from './zdhcexport-certified/zdhcexport-certified.component';
import { DomesticOrientedComponent } from './domestic-oriented/domestic-oriented.component';
import { AntistaticAgentsComponent } from './antistatic-agents/antistatic-agents.component';
import { DyeingAuxillariesComponent } from './dyeing-auxillaries/dyeing-auxillaries.component';


@NgModule({
  declarations: [
    // ProductsComponent,
    ZdhcexportCertifiedComponent,
    DomesticOrientedComponent,
    AntistaticAgentsComponent,
    DyeingAuxillariesComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
