import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Store } from '@ngrx/store';
import { register } from '../../../store/auth/auth.actions';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';

type RegisterForm = FormGroup<{
  email: FormControl<string>;
  username: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}>;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  standalone: false,
})
export class RegistrationComponent implements OnInit {
  registerForm!: RegisterForm;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.registerForm = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      const { email, username, password, confirmPassword } =
        this.registerForm.value;
      if (email && username && password && confirmPassword)
        this.store.dispatch(
          register({ email, username, password, confirmPassword })
        );
    }
  }
}
