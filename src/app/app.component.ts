import { Component } from '@angular/core';
import { ProductI } from './models/product.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isModalOpen = false;

  constructor() { }

  onOpenModal() {
    this.isModalOpen = true;
  }

}
