import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.verifyLogin()) {
      this.router.navigate(['admin']);
    }
  }

  onLogin(form: any) : void {
    this.authService.login({
      "email": form.value.email,
      "password": form.value.password,
      "returnSecureToken": true
    }).subscribe(
      res => {
        console.log('Login Response: ', res);
        this.router.navigate(['admin']);
      },
      err => {
        console.log('Login Error: ', err);
      }
    );
  }

}