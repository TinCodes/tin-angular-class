import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
	type: 'success',
	message: "ng Bootstrap is working!"
}, {
	type: 'info',
	message: 'Here is another alert!'
}]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'curso-angular';

  alerts: Alert[];

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
}