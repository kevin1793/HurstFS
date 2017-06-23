import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HurstService} from '../../app/services/hurst.service';
import {CategoryPage} from '../category/category'


/**
 * Generated class for the InventoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {

  category: any;
  count: any;
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private hurstService:HurstService) {
    this.getInv();
  }

  ionViewDidLoad() {
    console.log('tried');
  }

  getInv() {
  this.hurstService.getInv().subscribe(response => {
      this.items = response;
    });
  }

  pushNav(item){
    this.navCtrl.push(CategoryPage, {
      item:item
    }).then();
  }

  ngOnInit(){
    this.hurstService.getInfo();
  }


}
