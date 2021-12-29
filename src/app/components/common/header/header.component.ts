import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedUsername = this.auth.getItem('username');

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.loginChanges.subscribe((value) => {
      this.loggedUsername = value;
    });
  }
  logout() {
    this.auth.clearLocalStorage();
    this.router.navigate(['/logout']);
  }
}
