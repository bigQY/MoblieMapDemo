import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a03',
  templateUrl: './a03.page.html',
  styleUrls: ['./a03.page.scss'],
})
export class A03Page implements OnInit {

  myDiv: HTMLDivElement;

  constructor() {
  }

  ngOnInit() {
    this.myDiv = <HTMLDivElement>document.getElementById('mydiv');
    this.myDiv.innerText = '此处显示单击按钮后输出的结果';
    this.click1();
  }

  //1、字符串字面量类型【x: 'a' | 'b' | 'c' | 'd'】
  click1() {
    interface MyOptions {
      a: number;
      b: 'ease-in' | 'ease-out' | 'ease-in-out';
    }
    class MyClass {
      constructor(public opts: MyOptions) { }
    }
    const options: MyOptions = {
      a: 3,
      b: 'ease-in'
    };
    const c = new MyClass(options);
    this.myDiv.innerHTML = `1、字符串字面量类型<hr/>
        <p>
            a的options属性的值为：<br/>
            x=${c.opts.a}，b=${c.opts.b}
        </p>`;
  }

  //2、联合【a | b | c | d】（注意观察和1的区别在哪）
  click2() {
    this.myDiv.innerHTML = '2、联合<hr/>';
    //联合
    interface MyOptions {
      p1: string;
      //p2的类型是：【数组】或者【字符串】或者【函数】
      p2: string[] | string | (() => string);
    }
    const opts: MyOptions = {
      p1: '',
      p2: '',
    };
    opts.p1 = 'hello world'; // OK
    opts.p2 = ['a1', 'a2'];  // OK
    this.myDiv.innerHTML += `<p>
            opts的值为：<br/>
            p1：${opts.p1}<br/>
            p2：${opts.p2[0]}，${opts.p2[1]}
        </p>`;
  }

  //交叉【a & b & c & d】（难点）
  click3() {
    this.myDiv.innerHTML = '3、交叉<hr/>';

    function MyExt<T, U>(first: T, second: U): T & U {
      const result = <T & U>{};
      for (const id in first) {
        (<any>result)[id] = (<any>first)[id];
      }
      for (const id in second) {
        if (!result.hasOwnProperty(id)) {
          (<any>result)[id] = (<any>second)[id];
        }
      }
      return result;
    }
    class Person {
      constructor(public name: string) { }
    }
    class ConsoleLogger {
      log() {
        console.log('hello!');
      }
    }

    const jim = MyExt(new Person('杰姆'), new ConsoleLogger());
    console.log(jim)
    this.myDiv.innerHTML += `<p>
            jim的name属性值为：${jim.name}<br/>
        </p>`;
  }

}
