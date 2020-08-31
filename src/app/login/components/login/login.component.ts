import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	username = '';
	password = '';

	sw = true;

  constructor() { }

  ngOnInit(): void {
  }

  onLogin() : void {
  	console.log('User: ', this.username);
  	console.log('Password: ', this.password);
  }

  onAltLogin(form) : void {
  	console.log('Local Form: ', form.value);
  }

}
