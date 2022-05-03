/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable curly */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-b02',
  templateUrl: './b02.page.html',
  styleUrls: ['./b02.page.scss'],
})
export class B02Page {
  constructor(public navCtrl: NavController) {}

  div1: HTMLDivElement;
  readonly imgs: string[] = ['/assets/imges/logo.png', '/assets/imges/Mario.png', '/assets/imges/kitten1.jpg'];

  /** img的src将绑定到此属性 */
  imgSrc: string;
  /** 定时器1的id */
  id1: number;
  /** 定时器2的id */
  id2: number;
  /** 用于控制表格第1行的跨列数 */
  colspanProperty: number = 2;
  /** p1、p2都是在b02.page.scss文件中定义的CSS类 */
  readonly cssClass: string[] = ['p1', 'p2'];
  /** 用于切换p1和p2 */
  classProp: string;

  ionViewDidLoad() {
    this.div1 = <HTMLDivElement>document.getElementById('div1');
    this.imgSrc = this.imgs[0];
    this.classProp = this.cssClass[0];
  }
  ngOnInit() {
    this.ionViewDidLoad();
  }
  //【单向绑定】启动定时器
  start() {
    //每隔1秒自动切换一次图片
    this.id1 = window.setInterval(() => {
      if (this.imgSrc === this.imgs[0]) {
        this.imgSrc = this.imgs[1];
      } else if(this.imgSrc === this.imgs[1]){
        this.imgSrc = this.imgs[2];
      }else{
        this.imgSrc = this.imgs[0];
      }
    }, 1000);

    //每隔2秒自动切换一次CSS类名
    this.id2 = window.setInterval(() => {
      if (this.classProp === this.cssClass[0]) {
        //console.log("hello");
        //debugger;
        this.classProp = this.cssClass[1];
      } else {
        //debugger;
        this.classProp = this.cssClass[0];
      }
    }, 2000);
  }

  //【单向绑定】停止定时器
  stop() {
    if (this.id1 === undefined) return;
    clearInterval(this.id1);
    clearInterval(this.id2);
  }

  //【事件处理】切换div1的显示和隐藏
  switchDiv() {
    this.div1.hidden = !this.div1.hidden;
  }
}
