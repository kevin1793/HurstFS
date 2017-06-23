import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ShopPage } from '../shop/shop';
import { InventoryPage } from '../inventory/inventory';
import {ServicePage} from "../service/service";
import { ContactPage } from '../contact/contact';
import { NewsPage } from '../news/news';






@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = InventoryPage;
  tab3Root = NewsPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
