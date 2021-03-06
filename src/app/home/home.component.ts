import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../shared/instagram/instagram.service';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  newName = '';
  errorMessage: string;
  instagramUser: any;
  feed: any[];

  instagramUserSubscription: any;
  feedSubscription: any;

  constructor(public instagramService: InstagramService) {}

  ngOnInit() {
    this.getInstagramUser();
    this.getFeed();
  }

  ngOnDestroy() {
    this.instagramUserSubscription.unsubscribe();
    this.feedSubscription.unsubscribe();
  }

  getInstagramUser() {
    this.instagramUserSubscription = this.instagramService.getInstagramUser()
      .subscribe(
        instagramUser => this.instagramUser = instagramUser,
        error => this.errorMessage = <any>error
      );
  }

  getFeed() {
    this.feedSubscription = this.instagramService.getFeed()
      .subscribe(
        feed => this.feed = feed,
        error => this.errorMessage = <any>error
      );
  }
}
