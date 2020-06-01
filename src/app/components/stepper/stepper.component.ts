import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  steps = ['Review & Schedule', 'Select Address', 'Check Quote', 'Order Placed'];
  currentStep = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
