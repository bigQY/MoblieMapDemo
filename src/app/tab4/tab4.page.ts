import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  constructor(private nav: NavController) {
    var script = document.createElement("script");
      script.src = "https://api.map.baidu.com/api?v=3.0&ak=da1K4Mxg4LItgEhMy5h8k3ZbXzLzFb2I&callback=initialize";
      document.body.appendChild(script);
  }
  showPage1() {
    this.nav.navigateForward('/tabs/tab4/d01');
  }
  showPage2() {
    this.nav.navigateForward('/tabs/tab4/d02');
  }
  showPage3() {
    this.nav.navigateForward('/tabs/tab4/d03');
  }
  showPage4() {
    this.nav.navigateForward('/tabs/tab4/d04');
  }
  showPage5() {
    this.nav.navigateForward('/tabs/tab4/d05');
  }
  showPage6() {
    this.nav.navigateForward('/tabs/tab4/d06');
  }
  showPage7() {
    this.nav.navigateForward('/tabs/tab4/d07');
  }
  showPage8() {
    this.nav.navigateForward('/tabs/tab4/d08');
  }
  showPage9() {
    this.nav.navigateForward('/tabs/tab4/d09');
  }
}

