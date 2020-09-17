import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'navhead',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
	
	constructor(private authService: AuthService) {}

	ngOnInit(): void {  }

	public onLogout(): void {
	  this.authService.logout();
	}

}