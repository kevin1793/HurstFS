import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HurstService} from '../../app/services/hurst.service';
import {DetailsPage} from '../details/details';

/**
 * Generated class for the IdsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ids',
  templateUrl: 'ids.html',
})
export class IdsPage {
  model: String;
  id: any;
  items: any;
  category: String;
  table: any;
  equipment: string;
  loading: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private hurstService: HurstService) {

    this.model = navParams.get('item'),
      this.category = navParams.get('category'),
      this.getIds(this.category, this.id),
      this.equipment = 'equipment'
    ;
  }

  onLoad() {
    this.loading = false;
  }

  ionViewDidLoad() {
  }

  getIds(category, id){
    console.log(this.category+'before');

    this.model = this.model.replace(" ", "_");
    this.model = this.model.replace(" ", "_");
    this.model = this.model.replace(" ", "_");
    this.model = this.model.replace(" ", "_");
    this.model = this.model.replace(" ", "_");


    if(this.category != 'tractors' || this.category != 'cce_tractors'){
      this.category = 'equipment';
      this.hurstService.getIds(category, this.model).subscribe(response => {
        this.items = response;
        });

    }
    else{
      this.category = 'equipment';
      var equipment = 'equipment';

      this.hurstService.getIds(this.category, this.model).subscribe(response => {
          this.items = response;
      });
    }
    console.log(this.category+'after');

  }

  pushNav(category,id){
    this.navCtrl.push(DetailsPage, {
      table:category,
      id:id
    }).then();

  }

  ngOnInit(){
    this.hurstService.getInfo();
  }

}
