import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../../../store/auth/auth.actions';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

type SignInForm = FormGroup<{
  username: FormControl<string>;
  password: FormControl<string>;
}>;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  standalone: false,
})
export class SignInComponent implements OnInit {
  signInForm!: SignInForm;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.signInForm = this.fb.nonNullable.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSignIn() {
    if (this.signInForm.value.username && this.signInForm.value.password)
      this.store.dispatch(
        login({
          username: this.signInForm.value.username,
          password: this.signInForm.value.password,
        })
      );
  }
}
