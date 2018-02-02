import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rs-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
	@Input() private results;

  	constructor() { }

  	ngOnInit() {
  	}

}
