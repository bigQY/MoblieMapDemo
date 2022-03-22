import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Person, greeter, Student } from 'src/app/providers/Helloworld';
@Component({
  selector: 'app-a01',
  templateUrl: './a01.page.html',
  styleUrls: ['./a01.page.scss'],
})
export class A01Page implements OnInit {
  myDiv: HTMLDivElement;
  constructor(public navCtrl: NavController) { }
  ionViewDidLoad() {
    this.myDiv = document.getElementById('mydiv') as HTMLDivElement;
  }
  ngOnInit() {
    this.ionViewDidLoad();
  }
  // hello world
  click1() {
    var user1: Person = { name: '张三', welcomeInfo: '您好！' };
    var user2: Student = new Student('李四', '欢迎你！');
    this.myDiv.innerText = greeter(user1) + '\n' + user2.message;
  }
  // let和var的区别
  click2() {
    let mydiv = this.myDiv;
    mydiv.innerText = 'var和let语法相同，其实两者的区别并不是在语法上，而是在语义上！\n';
    for ( var i = 0; i < 5; i++) {
      mydiv.innerText += 'a' + i + '\n';
      var age1 = 23;
    }
    // 注意：i和age1都是在循环体内声明的，但是循环结束后仍然可用！
    mydiv.innerText += 'i=' + i + '，age=' + age1 + '\n\n';
    //  解决var全局污染的办法很简单，只需要将所有var全部都改为let就行了
    for (let j = 0; j < 5; j++) {
      mydiv.innerText += 'b' + j + '\n';
    }
  }
  click3() {
    this.myDiv.innerText = '\n想一想，为什么这段代码执行的结果和预期的不一致？\n\n';
    var  that = this;
    for ( var i = 0; i < 10; i++) {
      // 等待200毫秒，然后开始执行function()函数
      // tslint:disable-next-line: only-arrow-functions
      setTimeout( function () {
        that.myDiv.innerText += i + '\n';
      }, 200);
    }
  }
  // 前面都是为了说明问题，这个才是正确的写法
  click4() {
    this.myDiv.innerText = '';
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        this.myDiv.innerText += i + '\n';
      }, 200);
    }
  }
}
