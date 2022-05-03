import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private nav: NavController) {}
    showPage1() {
      this.nav.navigateForward('/tabs/tab2/b01');
    }
    showPage2() {
      this.nav.navigateForward('/tabs/tab2/b02');
    }
    showPage3() {
      this.nav.navigateForward('/tabs/tab2/b03');
    }
    showPage4() {
      this.nav.navigateForward('/tabs/tab2/b04');
    }

}
