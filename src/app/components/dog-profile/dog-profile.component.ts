import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'dog',
  templateUrl: './dog-profile.component.html',
  styleUrls: ['./dog-profile.component.scss']
})
export class DogProfileComponent implements OnInit {

  constructor() { }

  @Input() nombre: string;
  @Input() color: string;
  @Input() edad: number;
  @Input() vacunado: boolean;

  ngOnInit(): void {
  }

}
