import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductI } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product: ProductI;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
  }

  onUpdateQuantity(updatedQuantity: number) {
    if (updatedQuantity >= 0) {
      const updatedProduct: ProductI = { ...this.product, quantity: updatedQuantity };
      this._cartService.onUpdateQuantity(updatedProduct);
    }

  }

}
