import { Component, OnInit, TemplateRef, ContentChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  @ContentChild(TemplateRef) templateRef: TemplateRef<any>
  @Input() isOpen = false;
  @Output() isOpenChange = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.isOpen = false
    this.isOpenChange.emit(this.isOpen);
  }

}
