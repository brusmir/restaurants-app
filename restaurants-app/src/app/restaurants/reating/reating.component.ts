import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rs-reating',
  templateUrl: './reating.component.html',
  styleUrls: ['./reating.component.css']
})
export class ReatingComponent implements OnInit {
	@Input() private iconFull;
	@Input() private iconEmpty;
	@Input() private value;

  	constructor() { }

  	ngOnInit() {
  	}

}
