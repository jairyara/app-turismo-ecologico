import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteDescriptionPage } from './site-description.page';

const routes: Routes = [
  {
    path: '',
    component: SiteDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteDescriptionPageRoutingModule {}
