import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFormuPage } from './edit-formu.page';

const routes: Routes = [
  {
    path: '',
    component: EditFormuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFormuPageRoutingModule {}
