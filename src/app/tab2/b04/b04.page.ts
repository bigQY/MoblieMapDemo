/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-b04',
  templateUrl: './b04.page.html',
  styleUrls: ['./b04.page.scss'],
})
export class B04Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  students: string[] = ['张三', '李四', '王五'];
  age: number;        // 不赋值则不显示
  //age: number = 18;
  grade: number = 56;

}
