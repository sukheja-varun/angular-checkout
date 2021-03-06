import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductThumbnailComponent } from './components/product-thumbnail/product-thumbnail.component';
import { CartAmountComponent } from './components/cart-amount/cart-amount.component';
import { ModalComponent } from './components/modal/modal.component';
import { QuantityReviewComponent } from './container/quantity-review/quantity-review.component';
import { SelectAddressComponent } from './container/select-address/select-address.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    CarouselComponent,
    ProductThumbnailComponent,
    CartAmountComponent,
    ModalComponent,
    QuantityReviewComponent,
    SelectAddressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
