import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeFormuPage } from './make-formu.page';

const routes: Routes = [
  {
    path: '',
    component: MakeFormuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeFormuPageRoutingModule {}
