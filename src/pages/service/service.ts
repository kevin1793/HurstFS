import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';



@Component({
  selector: 'page-home',
  templateUrl: 'service.html'
})
export class ServicePage {
  location: string;
  description: string;
  serial: string;
  email: any;

  constructor(public navCtrl: NavController,
              private emailComposer: EmailComposer,
              public http: Http,
              private toastCtrl: ToastController) {
  }



  sendService(){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = {

      location: this.location,
      description: this.description,
      serial: this.serial,
      email: this.email
    };

    this.http.post("http://hurstfs.com/api/?service-email", JSON.stringify(body), {headers:headers})
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      });

    console.log(this.description);
    this.presentToast();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Service Request Sent',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  sendEmail(){
    let email = {
      to: 'kevin@primitivesocial.com',
      cc: '',
      bcc: [],
      attachments: [],

      subject: 'Service Request: '+this.serial,
      body: this.description+'<br><br><br>Sent From HurstFS App',
      isHtml: true
    };

    this.emailComposer.open(email);


    localStorage.setItem('location', this.location);
    localStorage.setItem('description', this.description);
    localStorage.setItem('serial', this.serial);

    console.log(this.location);
    console.log(this.description);

  }

}
