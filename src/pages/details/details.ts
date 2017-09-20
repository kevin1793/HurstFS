import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HurstService} from '../../app/services/hurst.service';
import {MoreInfoPage} from '../moreInfo/moreInfo'
import { ImgLoader } from 'ionic-image-loader';
import {TabsPage} from '../tabs/tabs'





/**
 * Generated class for the DetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  rootPage: any = TabsPage;

  model: any;
  category: any;
  items: any;
  id: any;
  imgs: any;
  url: String;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private hurstService: HurstService) {

    this.id = navParams.get('id'),
    this.category = navParams.get('table'),
      this.getDetails(this.category, this.id),
    this.getPics(this.category,this.id),
      this.url = 'http://hfsinventory.com/pics/'+this.category+'/',
      this.getInfo();
    ;
  }

  imgError(){
    console.log("error!!");
    return "assets/img/noImg.png";
  }

  pushNav(item){
    this.navCtrl.push(MoreInfoPage, {
      item:item
    }).then();
  }

  ionViewDidLoad() {
    console.log(this.hurstService.detailsUrl+this.category+'/'+this.id);
  }

  getPics(category,id){
    this.category = this.category.replace(" ", "_");

    this.hurstService.getPics(category,id).subscribe(response => {
      this.imgs = response;
    });

    console.log(this.id+'details');
  }

  link(){
    return this.url+this.id+'/';
  }

  getInfo(){
  }


  getDetails(category,id){
    this.hurstService.getDetails(category,id).subscribe(response => {
      this.items = response;
    });
  }

}
