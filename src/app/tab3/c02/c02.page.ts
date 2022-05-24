import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-c02',
  templateUrl: './c02.page.html',
  styleUrls: ['./c02.page.scss'],
})
export class C02Page implements OnInit {

  constructor(public navCtrl: NavController) { }
  gender: string = "f";
  gaming: string = "n64";
  music: string;
  month: string;
  year: number;
  musicAlertOpts: { header: string, subHeader: string } = {
    header: '1994 Music',
    subHeader: '请选择你喜欢的'
  };
  stpSelect() {
    console.log('STP selected');
  }

  ngOnInit() {
  }


}
