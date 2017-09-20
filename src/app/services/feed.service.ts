import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx/add/map/operator';
import {Storage} from '@ionic/storage';
import {Observable} from 'rxjs/Observable'

export class FeedItem{
  description: String;
  link: String;
  title: String;

  constructor(public http: Http, description: string, link: string, title: string){
    this.description = description,
      this.link = link,
      this.title = title
  }

}

export class Feed{
  url: String;
  title: String;

  constructor(public http: Http, url: string, title: string){
    this.url = url,
      this.title = title
  }

}
@Injectable()
export class FeedService{

  constructor(public http: Http, public storage: Storage){

  }

  public getSavedFeeds(){
    return this.storage.get('savedFeed').then(data => {
      let objFromString = JSON.parse(data);
      if (data != null && data != undefined) {
        return objFromString;
      }else{
        return [];
      }
    });
  }

}
