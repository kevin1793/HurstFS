import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController} from 'ionic-angular';
import {Http, Headers} from '@angular/http';



/**
 * Generated class for the MoreInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-more-info',
  templateUrl: 'moreInfo.html',
})
export class MoreInfoPage {

  first: string;
  last: string;
  email: string;
  phone: string;
  message: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http:Http,
              private toastCtrl: ToastController) {
  }

  requestInfo(){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = {

      first: this.first,
      last: this.last,
      email: this.email,
      phone: this.phone,
      message: this.message
    };

    this.http.post("http://hurstfs.com/api/?inventory-email", JSON.stringify(body), {headers:headers})
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      });

    console.log(this.email);
    this.presentToast();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Information Request Sent',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoreInfoPage');
  }

}
