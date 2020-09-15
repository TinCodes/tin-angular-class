import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(form: any) : void {
  	console.log('Form: ', form.value);

    this.authService.login({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }).subscribe(
      res => {
        console.log('Login Response: ', res);
        this.router.navigate(['pages']);
      },
      err => {
        console.log('Login Error: ', err);
      }
    );
  }

  // onAltLogin(form) : void {
  // 	console.log('Local Form: ', form.value);
  // 	this.router.navigate(['/pages']);
  // }

}