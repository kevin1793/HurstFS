import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CallNumber} from "@ionic-native/call-number";

/**
 * Generated class for the ContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private call:CallNumber,){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  async callNumber():Promise<any>{
    try {
      await this.call.callNumber('9726936886',true);
    }
    catch(e){
      console.error(e);
    }
  }

}
