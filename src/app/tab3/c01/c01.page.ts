import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-c01',
  templateUrl: './c01.page.html',
  styleUrls: ['./c01.page.scss'],
})
export class C01Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  /** 控制checkbox1的checked属性 */
  check1: boolean = false;
  /** 控制checkbox2的checked属性 */
  check2: boolean = true;
  /** 控制checkbox3的disabled属性 */
  check3Disable: boolean = true;

  /** radio按钮组选择的结果 */
  r: string='篮球';

  /** 下拉框选择的结果 */
  gaming: string = "game1";

  result: string;

  ionViewDidLoad() {
  }

  showResult() {
    //由于是双向绑定，所以代码中不需要考虑如何与html页面交互，直接使用check1、check2的值就行了
    this.result = `
    复选结果：喜欢篮球：${this.check1}，喜欢排球：${this.check2}
    <br>单选结果：${this.r}
    <br>下拉框选择的结果：${ this.gaming }`;
  }

}
