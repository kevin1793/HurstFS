import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import * as xml2js from "xml2js";
import {Observable} from 'rxjs/Observable';
import {InAppBrowser} from 'ionic-native';



@Injectable()
export class HurstService{
  http:any;
  baseUrl: String;
  modelUrl: String;
  category = String;
  detailsUrl: String;
  model: String;
  idUrl: String;
  id: any;
  picUrl: String;
  homeUrl: String;
  newsUrl: String;

  constructor(http:Http){
    this.http = http;
    this.baseUrl = 'http://hurstfs.com/api/?inventory-counts';
    this.modelUrl = 'http://hurstfs.com/api/?inventory-models/';
    this.idUrl = 'http://hurstfs.com/api/?inventory-list/';
    this.detailsUrl = 'http://hurstfs.com/api/?inventory-details/';
    this.picUrl = 'http://hfsinventory.com/pics/';
    this.homeUrl = 'http://hurstfs.com/api/?home-slider';
    this.newsUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Fnews.hurstfs.com%2Fblog%2Frss.xml'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

  }

  getHomeItems(){
    return this.http.get(this.homeUrl)
      .map(res => res.json());

  }

  urlChange(category){
    if (category == 'compact-tractors'){
      category = 'cce-tractors';
    }
  }


  load() {
    return Observable.create(subscriber => {
      this.http.get('http://news.hurstfs.com/blog/rss.xml')
        .map(res => res.text())
        .subscribe(data => {
          if(data) {
            var parser = new DOMParser();
            var xmlData = parser.parseFromString(data, "application/xml");
            var items = xmlData.querySelectorAll("item");
            for (var index = 0; index < items.length; index++) {
              var element = items[index];
              console.log(element);
            }
            subscriber.next(items);
          }
          else
          {
            subscriber.next([]);
          }
          subscriber.complete();
        });
    });
  }

  getNews(){
    return this.http.get(this.newsUrl)
      .map(res => res.json());
  }

  getPics(category, id){
    return this.http.get(this.picUrl+category+'/'+id)
      .map(res => res.json());
  }

  getInv(){
    return this.http.get(this.baseUrl)
      .map(res => res.json());
  }

  getModels(category){
    return this.http.get(this.modelUrl+category)
      .map(res => res.json());
  }

  getIds(category, model){
    return this.http.get(this.idUrl+category+'/'+model)
      .map(res => res.json());
  }

  getDetails(category,id){
    return this.http.get(this.detailsUrl+category+'/'+id)
      .map(res => res.json());
  }

  getInfo(){
    this.http.get('http://hurstfs.com/api/?inventory-models/tractors/').map(res => res.json()).subscribe(data => {
      console.log(data);
    });
  }

}
