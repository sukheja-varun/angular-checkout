import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product;

  constructor() { }

  ngOnInit(): void {
  }

}
