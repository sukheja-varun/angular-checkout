import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ProductI } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productList: ProductI[] = [
    {
      image: 'assets/images/AJWAIN_BISCUITS_COMPRESSED.jpg',
      name: 'AJWAIN BISCUITS',
      quantity: 1,
      price: 123,
    },
    {
      image: 'assets/images/Champakali_COMPRESSED.jpg',
      name: 'Champakali',
      quantity: 1,
      price: 434,
    },
    {
      image: 'assets/images/Anjeer_Dry_Fruit_Roll_COMPRESSED.jpg',
      name: 'Anjeer Dry Fruit Roll',
      quantity: 1,
      price: 189,
    },
    {
      image: 'assets/images/akaash-namkin.jpg',
      name: 'akaash namkin',
      quantity: 1,
      price: 284,
    },
    {
      image: 'assets/images/CHOCO_BISCUITS_COMPRESSED.jpg',
      name: 'CHOCO BISCUITS',
      quantity: 1,
      price: 255,
    },
    {
      image: 'assets/images/Chow_Chow_COMPRESSED.jpg',
      name: 'Chow Chow',
      quantity: 1,
      price: 101,
    },
    {
      image: 'assets/images/Dry_Fruit_Bite_Mix_COMPRESSED.jpg',
      name: 'Dry Fruit Bite Mix',
      quantity: 1,
      price: 149,
    },
    {
      image: 'assets/images/Dry_Jamoon_COMPRESSED.jpg',
      name: 'Dry Jamoon',
      quantity: 1,
      price: 199,
    },
    {
      image: 'assets/images/Fry_Kaju_masala_COMPRESSED.jpg',
      name: 'FryvKajuvmasala',
      quantity: 1,
      price: 299,
    },
    {
      image: 'assets/images/Anjeer_Dry_Fruit_Roll_COMPRESSED.jpg',
      name: 'Anjeer Dry Fruit Roll',
      quantity: 1,
      price: 232,
    },
    {
      image: 'assets/images/akaash-namkin.jpg',
      name: 'akaash namkin',
      quantity: 1,
      price: 266,
    },
  ];

  productSubject: BehaviorSubject<ProductI[]>;

  constructor() {
    this.productSubject = new BehaviorSubject<ProductI[]>(this.getProducts());
  }

  getProducts() {
    return JSON.parse(JSON.stringify(this.productList));
  }

  getProductsObservable() {
    return this.productSubject.asObservable();
  }

  onUpdateQuantity(updatedProduct: ProductI) {
    if (updatedProduct.quantity >= 0) {
      let index = this.productList.findIndex(product => product.name === updatedProduct.name);
      this.productList[index] = updatedProduct;
    }
    this.productSubject.next(this.getProducts());
  }
}
