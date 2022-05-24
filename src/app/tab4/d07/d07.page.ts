import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-d07',
  templateUrl: './d07.page.html',
  styleUrls: ['./d07.page.scss'],
})
export class D07Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  tip: string = '';  //被div的innerHTML单向绑定的目标

  //公交线路查询
  click1() {
    this.tip = '查公交线路：查询跨城公交的线路。';
    let map = new BMap.Map("bdmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);
    let transit = new BMap.TransitRoute(map, {
      renderOptions: {
        map: map,
        autoViewport: true

      },
      // 配置跨城公交的换成策略为优先出发早
      intercityPolicy: BMAP_INTERCITY_POLICY_EARLY_START,
      // 配置跨城公交的交通方式策略为飞机优先
      transitTypePolicy: BMAP_TRANSIT_TYPE_POLICY_AIRPLANE
    });
    let start = new BMap.Point(116.310791, 40.003419);
    let end = new BMap.Point(121.490546, 31.233585);
    transit.search(start, end);
  }

  //根据关键字本地搜索
  click2() {
    this.tip = '查景点：返回北京市“景点”关键字的检索结果，并展示在地图上。';
    let map = new BMap.Map("bdmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    let local = new BMap.LocalSearch(map, {
      renderOptions: { map: map }
    });
    local.search("景点");
  }

  //圆形区域检索
  click3() {
    this.tip = '查餐馆：返回北京市圆形区域范围内“餐馆”的检索结果，并展示在地图上。';
    let map = new BMap.Map("bdmap");            // 创建Map实例
    let mPoint = new BMap.Point(116.404, 39.915);
    map.enableScrollWheelZoom();
    map.centerAndZoom(mPoint, 15);

    let circle = new BMap.Circle(mPoint, 1000, { fillColor: "blue", strokeWeight: 1, fillOpacity: 0.3, strokeOpacity: 0.3 });
    map.addOverlay(circle);
    let local = new BMap.LocalSearch(map, {
      renderOptions: {
        map: map,
        panel: "r-result",
        autoViewport: false
      }
    });
    local.searchNearby('餐馆', mPoint, 1000);
  }

  //显示详细检索结果
  click4() {
    this.tip = '查餐饮：显示以某个点为中心的【餐饮】检索结果，并在地图的下方显示所有查询结果的详细信息。';
    let map = new BMap.Map("bdmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    let local = new BMap.LocalSearch(map, {
      renderOptions: { map: map, panel: "r-result" }
    });
    local.search("餐饮");
  }

}
