import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'make-formu',
    loadChildren: () => import('./make-formu/make-formu.module').then( m => m.MakeFormuPageModule)
  },
  {
    path: 'edit-formu/:id',
    loadChildren: () => import('./edit-formu/edit-formu.module').then( m => m.EditFormuPageModule)
  },
  {
    path: 'make-appointment',
    loadChildren: () => import('./make-appointment/make-appointment.module').then( m => m.MakeAppointmentPageModule)
  },
  {
    path: 'edit-appointment/:id',
    loadChildren: () => import('./edit-appointment/edit-appointment.module').then( m => m.EditAppointmentPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'rendez-vous',
    loadChildren: () => import('./rendez-vous/rendez-vous.module').then( m => m.RendezVousPageModule)
  },
  {
    path: 'propos',
    loadChildren: () => import('./propos/propos.module').then( m => m.ProposPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
