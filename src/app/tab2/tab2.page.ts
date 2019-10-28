import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Offer {
  value:String;
  description: String;
  date: String;
  code: String
};


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  offers: Array<Offer>;
  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get('./assets/data/offers.json')
    .subscribe((response:Array<Offer>)=> {
      this.offers = response;
      console.log(response);
    })
  }
}
