import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', loadChildren: () => import('./user-auth/user-auth.module').then(m => m.UserAuthModule) },
{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

//   { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
