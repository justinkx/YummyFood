import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  slideOpts:any = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 10,
    pagination: true,
    slidesPerView: 2
  };
  categories = <any>[];
  recomented = <any>[];
  popular = <any>[];
  searchWord:string;
  constructor(private platform: Platform,
    private http: HttpClient) {
      console.log(this.platform);
      this.slideOpts.width = this.platform.is('mobile') ? this.platform.width() - 32 :
      this.platform.width()/2 - 32;
    this.slideOpts.height = this.platform.height()/3;
  }

  ngOnInit() {
    forkJoin({
      category: this.http.get('./assets/data/food.json'),
      events: this.http.get('./assets/data/categories.json')
    })
    .subscribe((response:any) => {
      console.log(response);
      this.categories = response.category.category;
      this.recomented = response.events.categories[0].items;
      this.popular = response.events.categories[1].items;
    });
  }
}
