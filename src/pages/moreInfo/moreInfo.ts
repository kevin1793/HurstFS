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

  fName: string;
  lName: string;
  eMail: string;
  pNum: string;
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

      first: this.fName,
      last: this.lName,
      email: this.eMail,
      phone: this.pNum,
      message: this.message
    };

    this.http.post("http://hurstfs.com/api/?inventory-email", JSON.stringify(body), {headers:headers})
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      });

    this.presentToast();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Sent!  We will be in touch very soon.',
      duration: 3000,
      position: 'middle'
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
