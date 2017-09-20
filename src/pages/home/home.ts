import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details'
import { HurstService} from '../../app/services/hurst.service';
import { TabsPage} from '../tabs/tabs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rootPage: any = TabsPage;
  items: any;
  category: any;
  id: any;
  table: any;
  entries: Array<any> = [];
  posts: Array<any> = [];


  constructor(public navCtrl: NavController, private hurstService: HurstService) {
    this.getHomeItems(),
    this.hurstService.load(),
      this.getNews()
  }

  getHomeItems(){
    this.hurstService.getHomeItems().subscribe(response => {
      this.items = response;
    });
  }

  getNews(){
    this.hurstService.load().subscribe(
      data => {
        this.entries = data;
      }
    );

  }

  pushNav(category,id){
    this.navCtrl.push(DetailsPage, {
      table:category,
      id:id
    }).then();
  }

}
