import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import {HurstService} from '../../app/services/hurst.service';
import * as xml2js from "xml2js";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {Observable} from 'rxjs/Observable';
import {PostPage} from '../post/post';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var RSSParser;

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  targetUrl : String ;
  entries : Array<any> = [];
  http: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private hurstService: HurstService,
              public nav:NavController,
              private iab: InAppBrowser,
              public platform: Platform) {
    this.hurstService.load()

  }

  ionViewDidLoad(){
    this.hurstService.load().subscribe(
      data => {
        this.entries = data;
      }
    );

    console.log(this.entries)
  }


}
