import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductI } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-quantity-review',
  templateUrl: './quantity-review.component.html',
  styleUrls: ['./quantity-review.component.scss']
})
export class QuantityReviewComponent implements OnInit {
  productList: ProductI[] = [];
  amount = { cartTotal: 0, tax: 23, shippingCharges: 23 };
  @Output() next = new EventEmitter();

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.subscribeProductsChange();
  }

  subscribeProductsChange() {
    this._cartService.getProductsObservable().subscribe((products) => {
      this.productList = products;
      this.calculateAmount();
    });
  }

  calculateAmount() {
    this.amount.cartTotal = this.productList.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  onNextPage() {
    this.next.emit();
  }

}
