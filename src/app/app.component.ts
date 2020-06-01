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
  activeStep = 1;

  constructor() { }

  onOpenModal() {
    this.isModalOpen = true;
  }

  onModalClose() {
    this.isModalOpen = false;
    this.activeStep = 1;
  }

  onStepChange(step) {
    this.activeStep = step;
  }

}
