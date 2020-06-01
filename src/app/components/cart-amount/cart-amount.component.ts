import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-amount',
  templateUrl: './cart-amount.component.html',
  styleUrls: ['./cart-amount.component.scss']
})
export class CartAmountComponent implements OnInit {
  @Input() amount;

  constructor() { }

  ngOnInit(): void {
  }

}
