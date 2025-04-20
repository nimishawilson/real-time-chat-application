import { Component } from '@angular/core';

@Component({
    selector: 'app-forgot-password',
    // standalone: true,
    // imports: [],
    templateUrl: './forgot-password.component.html',
    styleUrl: './forgot-password.component.scss',
    standalone: false
})
export class ForgotPasswordComponent {
  onSubmit(onSubmit: any) {
    throw new Error('Method not implemented.');
  }

}
