import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdsPage } from './ids';
import { Component } from '@angular/core';


@NgModule({
  declarations: [
    IdsPage,
  ],
  imports: [
    IonicPageModule.forChild(IdsPage),
  ],
  exports: [
    IdsPage
  ]
})
export class IdsPageModule {
  isValid: boolean = true;
  age:number = 12;
  changeValue(valid: boolean) {
    this.isValid = valid;
  }
}
