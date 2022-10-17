import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../../views/checkout/checkout.service';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.css']
})
export class SelectButtonComponent implements OnInit {
  disabled = false;

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
  }

  selectMovie() {
    this.disabled = true;
    this.checkoutService.selectMovie();
  }

  unselectMovie() {
    this.disabled = false;
    this.checkoutService.unselectMovie();
  }
}
