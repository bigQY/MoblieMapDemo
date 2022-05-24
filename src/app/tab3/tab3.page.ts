import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private nav: NavController) { }
  showPage1() {
    this.nav.navigateForward('/tabs/tab3/c01');
  }
  showPage2() {
    this.nav.navigateForward('/tabs/tab3/c02');
  }
  showPage3() {
    this.nav.navigateForward('/tabs/tab3/c03');
  }
  showPage4() {
    this.nav.navigateForward('/tabs/tab3/c04');
  }


}
