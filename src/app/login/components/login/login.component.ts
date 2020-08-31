import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	username = '';
	password = '';

	sw = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() : void {
  	console.log('User: ', this.username);
  	console.log('Password: ', this.password);
  }

  onAltLogin(form) : void {
  	console.log('Local Form: ', form.value);
  	this.router.navigate(['/pages']);
  }

}
