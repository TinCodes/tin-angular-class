import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curso-angular';

  ngOnInit(){
    const aux = [1,2,3,4,5,6,7,8];
    const index = aux.findIndex(s => s === 3);
    console.log(index);

    const aux2 = aux.filter(s => s % 2 === 0);
    console.log("Evens:", aux2)

    const aux3 = aux.map(s => s*5);
    console.log("Mapped:", aux3)

    // Spread Operator (...)
    const arr = [-1, 0, ...aux];
    console.log("Copied with spread operator:", arr); 

      // Works with json too
    const jj = {
      name: 'lol',
      last: 'enzio'
    }

    const JJ = {id: "01", ...jj, extra: "yes"}
    console.log("Json example:", JJ);

    // Destructuring
    const pipol = {
      data: {
        name: "frank",
        response: []
      },
      phones: {
        house: "321",
        cellphone: "123"
      }
    }

    const {data, phones} = pipol
    console.log('Data:', data)
    console.log('Phones:', phones)
    //    Note: these (data and phone) are objects

    // Let variables (scope variables)
      // only available inside the scope they   were defined on
    
    let lol = "lmao";

    // Conditional Operator (if alternative)
    2 > 1 ? lol = 'yiss' : lol = 'wat';
    console.log(lol)
  }
}
