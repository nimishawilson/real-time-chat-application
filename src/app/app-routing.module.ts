import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './user-auth/components/registration/registration.component';
import { SignInComponent } from './user-auth/components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './user-auth/components/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
//   { path: '**', redirectTo: '' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
