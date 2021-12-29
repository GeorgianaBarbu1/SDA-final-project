import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  ngOnInit(): void {}

  onSubmit() {
    const submitValue = this.form.value;
    delete submitValue['confirmPassword'];
    this.auth.requestRegistration(submitValue).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  checkPassword() {
    if (
      this.form.controls.password.value !== '' &&
      this.form.controls.confirmPassword.value !== '' &&
      this.form.controls.password.value ===
        this.form.controls.confirmPassword.value &&
      this.form.valid
    ) {
      return true;
    }
    return false;
  }
}
