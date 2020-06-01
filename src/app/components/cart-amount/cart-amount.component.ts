import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-amount',
  templateUrl: './cart-amount.component.html',
  styleUrls: ['./cart-amount.component.scss']
})
export class CartAmountComponent implements OnInit {
  @Input() amount;
  @Output() next = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onNext() {
    this.next.emit();
  }

}
