import { Component, OnInit, HostListener, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductI } from 'src/app/models/product.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() dataList: ProductI[] = [];

  dataPerPage = 3;
  currentPage = 0;
  totalPages = 0;
  indicators = [];

  constructor(private readonly _cartService: CartService) { }

  ngOnInit(): void {
    this.onResize();
  }

  initVariables() {
    this.totalPages = Math.ceil(this.dataList.length / this.dataPerPage);
    this.indicators = new Array(this.totalPages);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (window.innerWidth <= 480) {
      this.dataPerPage = 1;
    }
    else if (window.innerWidth <= 1024) {
      this.dataPerPage = 2;
    }
    else {
      this.dataPerPage = 3;
    }
    this.initVariables();
  }

  onPrev() {
    let newPage = this.currentPage - 1;
    this.currentPage = newPage < 0 ? this.totalPages - 1 : newPage;
  }
  onNext() {
    let newPage = this.currentPage + 1;
    this.currentPage = newPage % this.totalPages;
  }
}
