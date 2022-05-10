import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d04',
  templateUrl: './d04.page.html',
  styleUrls: ['./d04.page.scss'],
})
export class D04Page implements OnInit {

  constructor() {
    var script = document.createElement("script");
      script.src = "https://api.map.baidu.com/api?v=3.0&ak=da1K4Mxg4LItgEhMy5h8k3ZbXzLzFb2I&callback=initialize";
      document.body.appendChild(script);
  }

  ngOnInit() {
  }

  map: BMap.Map;

  //文字标注
  click1() {
    let map = new BMap.Map("bdmap");
    let point = new BMap.Point(116.400244, 39.92556);
    map.centerAndZoom(point, 12);
    let marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);              // 将标注添加到地图中

    let label = new BMap.Label("我是文字标注哦", { offset: new BMap.Size(20, -10) });
    marker.setLabel(label);
  }

  //动画标注
  click2() {
    let map = new BMap.Map("bdmap");
    let point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);
    let marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);               // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
  }

  //点标注
  click3() {
    let map = new BMap.Map("bdmap");
    let point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);
    //创建点
    let marker = new BMap.Marker(new BMap.Point(116.404, 39.915));
    map.addOverlay(marker);
  }

  //多点标注
  click4() {
    let map = new BMap.Map("bdmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    // 编写自定义函数,创建标注
    let addMarker = (point: BMap.Point) => {
      let marker = new BMap.Marker(point);
      map.addOverlay(marker);
    }
    // 随机向地图添加n个标注
    let n = 25;
    let bounds = map.getBounds();
    let sw = bounds.getSouthWest();
    let ne = bounds.getNorthEast();
    let lngSpan = Math.abs(sw.lng - ne.lng);
    let latSpan = Math.abs(ne.lat - sw.lat);
    for (let i = 0; i < n; i++) {
      let point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
      addMarker(point);
    }
  }

  /**
   * 随机向地图添加n个点标注
   * @param n 要添加的点的个数
   * @returns 添加点标注后的地图
   */
  addLabelMarkers(n: number) {
    let map = new BMap.Map("bdmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    map.disableDoubleClickZoom();
    map.clearOverlays();

    // 编写自定义函数,创建标注
    let addMarker = (point: BMap.Point, label: BMap.Label) => {
      let marker = new BMap.Marker(point);
      map.addOverlay(marker);
      marker.setLabel(label);
    };
    // 随机向地图添加n个标注
    let bounds = map.getBounds();
    let sw = bounds.getSouthWest();
    let ne = bounds.getNorthEast();
    let lngSpan = Math.abs(sw.lng - ne.lng);
    let latSpan = Math.abs(ne.lat - sw.lat);
    for (let i = 0; i < n; i++) {
      let point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
      let label = new BMap.Label("我是id=" + i, { offset: new BMap.Size(20, -10) });
      addMarker(point, label);
    }
    this.map = map;
  }

  //添加多点文字标注
  click5() {
    //随机向地图添加5个Label点标注
    this.addLabelMarkers(5);
  }

  //从添加的多个Label点标注中删除某标注（简单示例）
  click6() {
    //删除"我是id=1"的点
    let allOverlay = this.map.getOverlays();
    for (let i = 0; i < allOverlay.length - 1; i++) {
      let marker = allOverlay[i] as BMap.Marker;
      if (marker) {
        if (marker.getLabel().content == "我是id=1") {
          this.map.removeOverlay(marker);
        }
      }
    }
  }

}
