import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingComponent } from './landing/landing.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatIconModule,
  ]
})
export class LandingPageModule { }
