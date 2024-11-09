import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    SignInComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule
  ],
})
export class UserAuthModule { }
