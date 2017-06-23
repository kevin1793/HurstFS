import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {CloudSettings, CloudModule} from '@ionic/cloud-angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { CommonModule } from '@angular/common';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ServicePage } from '../pages/service/service';
import { NewsPage } from '../pages/news/news';
import { ContactPage } from '../pages/contact/contact';
import { InventoryPage } from '../pages/inventory/inventory';
import { HttpModule } from "@angular/http";
import { CategoryPage } from '../pages/category/category';
import { DetailsPage } from '../pages/details/details';
import { IdsPage} from '../pages/ids/ids';
import { PostPage} from '../pages/post/post';
import { MoreInfoPage} from '../pages/moreInfo/moreInfo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {ShopPage} from "../pages/shop/shop";
import {AboutPage} from "../pages/about/about";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { EmailComposer } from '@ionic-native/email-composer';
import { HttpProvider } from '../providers/http/http';
import { GetDesPipe } from '../pipes/getDes/getDes';
import { GetDatePipe } from '../pipes/getDate/getDate';
import { GetPicPipe } from '../pipes/getPic/getPic';
import { FixTextPipe } from '../pipes/fixText/fixText';
import { IonicImageLoader } from 'ionic-image-loader';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { CallNumber} from '@ionic-native/call-number';




const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '5d0332cb',
  },
  'push': {
    'sender_id': '191032867146',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    ServicePage,
    NewsPage,
    ShopPage,
    ContactPage,
    AboutPage,
    InventoryPage,
    CategoryPage,
    DetailsPage,
    IdsPage,
    PostPage,
    GetDesPipe,
    GetDatePipe,
    GetPicPipe,
    MoreInfoPage,
    FixTextPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:false,
      tabSubPages: false}),
    CloudModule.forRoot(cloudSettings),
    IonicImageLoader,
    IonicImageLoader.forRoot(),
    IonicImageViewerModule,
    CommonModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    ServicePage,
    NewsPage,
    ShopPage,
    ContactPage,
    AboutPage,
    InventoryPage,
    CategoryPage,
    DetailsPage,
    IdsPage,
    PostPage,
    MoreInfoPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    EmailComposer,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    CallNumber
  ]
})
export class AppModule {}
