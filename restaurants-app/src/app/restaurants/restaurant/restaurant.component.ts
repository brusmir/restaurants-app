import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'rs-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
	@Input() private result;
  	constructor() { }

  	ngOnInit() {
  	}

}
