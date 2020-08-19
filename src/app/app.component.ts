import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-angular';

  perros = [{
		nombre: "choco",
		color: "cafe",
		edad : 2,
		vacunado: true
	},
	{
		nombre: "perla",
		color: "amarillo",
		edad: 4,
		vacunado: false
	},
	{
		nombre: "jorge ",
		color: "cafe",
		edad: 5,
		vacunado: false
	},
	{
		nombre: "beto",
		color: "negro",
		edad: 5,
		vacunado: true
	},
	{
		nombre: "berni",
		color: "negro",
		edad: 4,
		vacunado: true
	},
	{
		nombre:"cuki",
		color: "negro",
		edad: 7,
		vacunado: false
	},
	{
		nombre: "lobo",
		color: "amarillo",
		edad: 1,
		vacunado: false
	},
	{
		nombre: "bozer",
		color: "negro",
		edad: 4,
		vacunado: true
	},
	{
		nombre: "dormilon",
		color: "cafe",
		edad: 4,
		vacunado: false
	},
	{
		nombre: "vandido",
		color: "azul",
		edad: 5,
		vacunado: false
	}];

	vacunados = this.perros.filter(s => s.vacunado);
	notVacunados = this.perros.filter(s => !s.vacunado);

	vacunar(perro) {
		const i = this.notVacunados.findIndex(s => s === perro);
		this.notVacunados.splice(i,1);
		this.vacunados.push(perro);
	}
}
