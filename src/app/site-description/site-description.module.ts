import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiteDescriptionPageRoutingModule } from './site-description-routing.module';

import { SiteDescriptionPage } from './site-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiteDescriptionPageRoutingModule
  ],
  declarations: [SiteDescriptionPage]
})
export class SiteDescriptionPageModule {}
