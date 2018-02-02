import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rs-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

	@Input() private totalItems: number;
	@Input() private pageSize: number;
	@Input() private activePage: number;
	@Output() private onPageSelected = new EventEmitter();
	private pages: number[];
	private numOfPages: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  	this.pages = [];
  	this.numOfPages = Math.ceil(this.totalItems/this.pageSize);
  	for(let i=1; i <= this.numOfPages; i++){
  		this.pages.push(i);
  	}
  }

  pageSelected(page){
  	if(page>=1 && page<=this.numOfPages){
  		this.activePage = page;
  		this.onPageSelected.emit({page: this.activePage});
  	}
  }
}
