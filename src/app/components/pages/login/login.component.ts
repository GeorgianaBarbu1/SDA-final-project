import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/service/auth.service';
import { UserModel } from 'src/app/service/model/userModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private service: AuthService, private router: Router) {}
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  ngOnInit(): void {}

  submitUser() {
    this.service.login(this.form.value).subscribe((data) => {
      if (data) {
        this.saveUserOnLocalStorage(data);
        this.router.navigate(['/home']);
      } else {
        alert('Utizatorul nu a fost gasit!');
      }
    });
  }

  saveUserOnLocalStorage(data: UserModel) {
    this.service.setItem('ID', data.id.toString());
    this.service.setItem('username', data.username);
  }
}
