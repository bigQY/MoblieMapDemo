import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a04',
  templateUrl: './a04.page.html',
  styleUrls: ['./a04.page.scss'],
})
export class A04Page implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.ionViewDidLoad();
  }

  myDiv: HTMLDivElement;

  ionViewDidLoad() {
      this.myDiv = <HTMLDivElement>document.getElementById('mydiv');
      this.myDiv.innerText = '此处显示单击按钮后输出的结果';
      this.click1();
  }

  //JavaScript的写法
  click1() {
      this.myDiv.innerHTML = '<p>JavaScript：很多代码都像瞎子摸象似的</p>';

      //JavaScript的命名函数
      function add(x, y) {
          return x + y;
      }
      //JavaScript的匿名函数【Anonymous function】
      var myAdd = function (x, y, z) { return x + y + z; };

      var i = 5, j = 10, k = 10;
      this.myDiv.innerHTML += '<p>' +
          'i + j = ' + add(i, j) + '<br>' +
          'i + j + z = ' + myAdd(i, j, k) + '</p>';
  }

  //TypeScript的写法
  click2() {
      this.myDiv.innerHTML = '<p>TypeScript：类型明确、不易出错</p>';

      let add = (x: number, y: number) => {
          return x + y;
      }
      let myAdd = (x: number, y: number, z: number) => {
          return x + y + z;
      };

      let i = 5, j = 10, k = 10;
      this.myDiv.innerHTML += `<p>
          i + j = ${add(i, j)}<br>
          i + j + z = ${myAdd(i, j, k)}
      </p>`
  }

}
