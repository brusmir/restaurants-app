import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rs-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

	@Input() private priceFrom: number;
	@Input() private priceTo: number;
	@Output() private onPriceChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  priceChange(){
  	this.onPriceChange.emit({priceFrom: this.priceFrom, priceTo: this.priceTo});
  }
}
