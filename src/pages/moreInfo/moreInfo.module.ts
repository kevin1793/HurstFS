import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoreInfoPage } from './moreInfo';

@NgModule({
  declarations: [
    MoreInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MoreInfoPage),
  ],
  exports: [
    MoreInfoPage
  ]
})
export class MoreInfoPageModule {}
