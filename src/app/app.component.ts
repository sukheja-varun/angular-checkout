import { Component } from '@angular/core';
import { ProductI } from './models/product.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  productList: ProductI[] = [];
  amount = { cartTotal: 0, tax: 23, shippingCharges: 23 };

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
}
