import { Component, ViewChild } from '@angular/core';
import {Nav, Platform, AlertController, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {ServicePage} from "../pages/service/service";
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ShopPage } from '../pages/shop/shop';
import { AboutPage } from '../pages/about/about';
import { NewsPage } from '../pages/news/news';
import { InventoryPage } from '../pages/inventory/inventory';
import { HurstService} from './services/hurst.service';
import {Deploy} from '@ionic/cloud-angular';
import { LoadingController } from 'ionic-angular';
import {Push,
  PushToken
} from '@ionic/cloud-angular';
import {root} from "rxjs/util/root";

@Component({
  templateUrl: 'app.html',
  providers: [HurstService],
})
export class MyApp {
  rootPage: any = TabsPage;
  @ViewChild(Nav) nav: Nav;
  newVer: String;
  updated: String;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public push:Push,
              public alertCtrl:AlertController,
              public deploy: Deploy,
              private toastCtrl: ToastController,
              public loading: LoadingController) {




    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage},
      { title: 'Inventory', component: InventoryPage },
      { title: 'News', component: NewsPage },
      { title: 'Service', component: ServicePage },
      { title: 'Contact', component: ContactPage },
      { title: 'Shop', component: ShopPage },
      { title: 'About', component: AboutPage }
    ],
      this.newVer = 'New Version Available...Updating',
      this.updated = 'Updating Complete! Please Restart App!';

  }
  presentToast(string) {
    let toast = this.toastCtrl.create({
      message: string,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  updatedToast(string) {
    let toast = this.toastCtrl.create({
      message: string,
      duration: 5000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  initializeApp() {

    let loader = this.loading.create({
      content: 'Loading...',
    });
    
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      loader.dismiss();

      if (this.platform.is('cordova')) {

          this.push.register().then((t: PushToken) => {
            return this.push.saveToken(t);
          }).then((t: PushToken) => {
            console.log('Token saved:', t.token);
          });

         this.push.rx.notification()
          .subscribe((msg) => {
            console.log('I received awesome push: ' + msg);
          });


          this.deploy.check().then((snapshotAvailable: boolean) => {
            if (snapshotAvailable) {

              this.presentToast(this.newVer);

              this.deploy.download().then(() => {
                return this.deploy.extract();
              });
              this.deploy.load();
              this.updatedToast(this.updated);
            }
          });

      }





    });
  }



  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
