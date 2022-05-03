/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-b01',
  templateUrl: './b01.page.html',
  styleUrls: ['./b01.page.scss'],
})
export class B01Page {
  constructor(public navCtrl: NavController) {}
  current: string;

  ionViewDidLoad() {
    setInterval(() => {
      this.current = this.DateFormat(Date.now(), 'yyyy-MM-dd hh:mm:ss');
    }, 1000);
  }

  // 为什么给的示例总是缺少这个函数，裂开了
  ngOnInit() {
    this.ionViewDidLoad();
  }

  DateFormat(n: number, format: string) {
    let date = new Date(n);
    let y = date.getFullYear().toString();
    let month = date.getMonth() + 1;
    let MM = month < 10 ? '0' + month : '' + month;
    let d = date.getDate();
    let DD = d < 10 ? '0' + d : '' + d;
    let h = date.getHours();
    let HH = h < 10 ? '0' + h : '' + h;
    let m = date.getMinutes();
    let mm = m < 10 ? '0' + m : '' + m;
    let s = date.getSeconds();
    let ss = s < 10 ? '0' + s : '' + s;
    let newdate;
    newdate = format.replace('yyyy', y);
    newdate = newdate.replace('MM', MM);
    newdate = newdate.replace('dd', DD);
    newdate = newdate.replace('hh', HH);
    newdate = newdate.replace('mm', mm);
    newdate = newdate.replace('ss', ss);
    return newdate;
  }

  // log(){
  //   console.log(this.current);
  // }
}
