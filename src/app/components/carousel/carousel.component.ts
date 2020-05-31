import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  dataList = [
    {
      image: 'assets/images/AJWAIN_BISCUITS_COMPRESSED.jpg',
      name: 'AJWAIN BISCUITS',
      quantity: 1,
      price: 1,
    },
    {
      image: 'assets/images/Champakali_COMPRESSED.jpg',
      name: 'Champakali',
      quantity: 1,
      price: 1,
    },
    {
      image: 'assets/images/Anjeer_Dry_Fruit_Roll_COMPRESSED.jpg',
      name: 'Anjeer Dry Fruit Roll',
      quantity: 1,
      price: 1,
    },
    {
      image: 'assets/images/akaash-namkin.jpg',
      name: 'akaash namkin',
      quantity: 1,
      price: 1,
    },
    {
      image: 'assets/images/CHOCO_BISCUITS_COMPRESSED.jpg',
      name: 'CHOCO BISCUITS',
      quantity: 1,
      price: 1,
    },
    {
      image: 'assets/images/Chow_Chow_COMPRESSED.jpg',
      name: 'Chow Chow',
      quantity: 1,
      price: 1,
    },
    {
      image: 'assets/images/Dry_Fruit_Bite_Mix_COMPRESSED.jpg',
      name: 'Dry Fruit Bite Mix',
      quantity: 1,
      price: 1,
    },
    {
      image: 'assets/images/Dry_Jamoon_COMPRESSED.jpg',
      name: 'Dry Jamoon',
      quantity: 1,
      price: 1,
    },
    {
      image: 'assets/images/Fry_Kaju_masala_COMPRESSED.jpg',
      name: 'FryvKajuvmasala',
      quantity: 1,
      price: 1,
    },
    {
      image: 'assets/images/Anjeer_Dry_Fruit_Roll_COMPRESSED.jpg',
      name: 'Anjeer Dry Fruit Roll',
      quantity: 1,
      price: 1,
    },
    {
      image: 'assets/images/akaash-namkin.jpg',
      name: 'akaash namkin',
      quantity: 1,
      price: 1,
    },
  ];

  dataPerPage = 3;
  currentPage = 0;
  totalPages = 0;
  indicators = [];

  constructor() { }

  ngOnInit(): void {
    this.onResize();
  }

  initVariables() {
    this.totalPages = Math.ceil(this.dataList.length / this.dataPerPage);
    this.indicators = new Array(this.totalPages);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    // this.screenHeight = window.innerHeight;
    // this.screenWidth = window.innerWidth;
    console.log(window.innerWidth);
    if (window.innerWidth <= 480) {
      this.dataPerPage = 1;
    } else if (window.innerWidth <= 768) {
      this.dataPerPage = 2;
    } else {
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
