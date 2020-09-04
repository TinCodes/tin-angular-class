import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() name: string;
  @Input() size: number;
  @Input() stock: number;
  @Input() type: string;
  @Input() urlImage: string;


  constructor() {

  }

  ngOnInit(): void { }
}
