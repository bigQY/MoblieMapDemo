import { Component, NgModule, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-d01',
  templateUrl: './d01.page.html',
  styleUrls: ['./d01.page.scss'],
})
export class D01Page implements OnInit{

  constructor(public navCtrl: NavController) {
  }
  ngOnInit(): void {
      var script = document.createElement("script");
      script.src = "https://api.map.baidu.com/api?v=3.0&ak=da1K4Mxg4LItgEhMy5h8k3ZbXzLzFb2I&callback=initialize";
      document.body.appendChild(script);
  }



  isKaifeng: boolean;

  ionViewDidLoad(){
      this.isKaifeng = true;
  }

  //显示基本的开封地图（Hello World）
  click1() {
      this.isKaifeng = true;

      // 创建百度地图API的Map实例
      const map = new BMap.Map('bdmap');
      //或者【构造底图时，关闭底图可点击功能（关闭poi检索）】：
      //let map = new BMap.Map("container", { enableMapClick: false });

      // 设置地图中心点坐标（河大计算机学院门前路上）
      const point = new BMap.Point(114.315, 34.821);
      // 初始化地图和地图级别
      map.centerAndZoom(point, 15);
      //开启鼠标滚轮缩放【默认不开启】
      map.enableScrollWheelZoom();
  }

  //切换【北京/开封】并显示带控件控制的北京或开封地图
  click2() {
      this.isKaifeng = !this.isKaifeng;
      const map = new BMap.Map('bdmap');
      if (this.isKaifeng) {
          map.centerAndZoom(new BMap.Point(114.315745, 34.824635), 11);
          map.setCurrentCity('开封');  //设置地图显示的城市
      } else {
          map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
          map.setCurrentCity('北京');
      }
      //添加平移缩放控件
      map.addControl(new BMap.NavigationControl());
      //添加比例尺控件
      map.addControl(new BMap.ScaleControl());
      //添加缩略图控件
      map.addControl(new BMap.OverviewMapControl());

      //添加默认的地图类型控件
      map.addControl(new BMap.MapTypeControl());
      //或者【指定仅显示哪些地图类型控件】：
      // map.addControl(new BMap.MapTypeControl({
      //     mapTypes: [
      //         BMAP_NORMAL_MAP,
      //         BMAP_PERSPECTIVE_MAP,//目前百度还没有实现开封的三维图
      //         BMAP_HYBRID_MAP,
      //     ]
      // }));

      map.enableScrollWheelZoom();  //开启鼠标滚轮缩放
  }

}
