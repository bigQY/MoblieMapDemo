import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private nav: NavController) {}
  showPage1() {
    this.nav.navigateForward('/tabs/tab1/a01');
  }
  showPage2() {
    this.nav.navigateForward('/tabs/tab1/a02');
  }
  showPage3() {
    this.nav.navigateForward('/tabs/tab1/a03');
  }
  showPage4() {
    this.nav.navigateForward('/tabs/tab1/a04');
  }
}
