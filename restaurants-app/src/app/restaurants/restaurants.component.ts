import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantService } from './service/restaurant.service';
import { Restaurant } from './model/restaurant';

@Component({
  selector: 'rs-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
	private count: number;
	private results: Restaurant[];

  private params = {
    sort: "rating",
    sortDirection: "desc",
    page: 1,
    pageSize: 12,    
    filter: { 
      priceFrom: 1,
      priceTo: 5,
      cuisine: ""
    }  
  }

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
          let cuisine = params['cuisine'];          
          if(cuisine == "all"){
            this.params.filter.cuisine = "";
            this.getRestaurants();
          }else {
            this.params.filter.cuisine = cuisine;  
            this.getRestaurants();
          }          
    });  
  }

  getRestaurants(){
  	this.restaurantService.getAllRestaurants(this.params).subscribe( resp => {
  		this.count = resp.count;
  		this.results = resp.results;        		
  	})	
  }

  updateParams(par?:any){
    if(par){
      this.params.page = par.page || this.params.page;
      this.params.filter.priceFrom = par.priceFrom || this.params.filter.priceFrom;
      this.params.filter.priceTo = par.priceTo || this.params.filter.priceTo;
      this.getRestaurants();
    }      
  }

}
