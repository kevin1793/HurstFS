import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HurstService} from '../../app/services/hurst.service';
import {IdsPage} from '../ids/ids';



/**
 * Generated class for the CategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  category: any;
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private hurstService: HurstService) {

    this.category = navParams.get('item'),
      this.getModels(this.category);
  }

  ionViewDidLoad() {
    console.log(this.category+'categories');
  }

  getModels(category) {
    this.hurstService.getModels(category).subscribe(response => {
      this.items = response;
    });
  }

  pushNav(item, category){

    if (category == 'rtk-gps' ||
      category == 'tillage-attachments' ||
      category == 'planter-attachments' ||
      category == 'fertilizer-attachments' ||
      category == 'nurse-trailers' ||
      category == 'tillage' ||
      category == 'nurse-trailers' ||
      category == '3pt-sprayers' ||
      category == 'shredders-rotary-hoes' ||
      category == 'nurse-trailers' ||
      category == 'material-handling' ||
      category == 'fertilizer-applicator' ||
      category == 'nurse-trailers' ||
      category == 'grain-planting' ||
      category == 'planting-cotton' ||
      category == 'hay-equipment' ||
      category == 'grain-harvest' ||
      category == 'cotton-harvest' ||
      category == 'nurse-trailers' ||
      category == 'self-propelled-sprayers'
    )

    {
      category = 'equipment';
    }

    if (category == 'riding-mowers' ||
      category == 'xuv-gator'
    )
    {
      category = 'cce_equipment';

    }
    console.log(category+'models->id');
    this.navCtrl.push(IdsPage, {
      item:item,
      category:category
    }).then();

  }

  ngOnInit(){
  }

}
