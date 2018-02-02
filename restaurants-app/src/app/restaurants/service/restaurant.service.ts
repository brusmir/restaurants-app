import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { RestaurantList } from '../model/restaurantList';

const baseUrl = "http://localhost:3000/api/restaurants";

@Injectable()

export class RestaurantService {

  constructor(private http: HttpClient) { }

  getAllRestaurants(params? :any):Observable<RestaurantList>{
  	let queryParams = {};
	if(params){
		queryParams = {
			params : new HttpParams()
			.set("sort", params.sort || "")
    		.set("sortDirection", params.sortDirection || "")
    		.set("page", params.page && params.page.toString() || "")
    		.set("pageSize", params.page && params.pageSize.toString() || "")
    		.set("filter", params.filter && JSON.stringify(params.filter) || "")
    	}
    }
  	return this.http.get(baseUrl, queryParams).map( resp => new RestaurantList(resp))
  }

}
