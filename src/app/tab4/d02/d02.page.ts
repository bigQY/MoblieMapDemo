import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-d02',
  templateUrl: './d02.page.html',
  styleUrls: ['./d02.page.scss'],
})
export class D02Page implements OnInit {

  constructor(public navCtrl: NavController) { }
  map: BMap.Map;

  ionViewDidLoad() {
    this.map = new BMap.Map("container");
    this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 13);
    this.map.enableScrollWheelZoom();
  }
  //添加折线
  click1() {
    //添加折线
    let x = 116.399; //经度
    let y = 39.950;  //纬度（值越大越靠上）
    let polyline1 = new BMap.Polyline([
      new BMap.Point(x, y),
      new BMap.Point(x + 0.006, y + 0.010),
      new BMap.Point(x + 0.026, y - 0.010)
    ], {
        strokeColor: "blue",
        strokeWeight: 2,
        strokeOpacity: 0.5
      });
    this.map.addOverlay(polyline1);
  }

  //添加带箭头的折线
  click2() {
    let x = 116.350658; //经度
    let y = 39.948285;  //纬度（值越大越靠上）
    let points = [
      new BMap.Point(x, y),
      new BMap.Point(x + 0.035788, y + 0.000996),
      new BMap.Point(x + 0.038376, y - 0.024457),
      new BMap.Point(x + 0.091843, y - 0.023682)
    ];
    let symbol = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
      scale: 0.6,//图标缩放大小
      strokeColor: '#fff',//设置矢量图标的线填充颜色
      strokeWeight: 2,//设置线宽
    });
    let iconSequence1 = new BMap.IconSequence(symbol, '10', '30');
    let polyline2 = new BMap.Polyline(points, {
      enableEditing: false,//是否启用线编辑，默认为false
      enableClicking: true,//是否响应点击事件，默认为true
      icons: [iconSequence1],
      strokeWeight: 8, //折线的宽度，以像素为单位
      strokeOpacity: 0.8,//折线的透明度，取值范围0 - 1
      strokeColor: "#18a45b" //折线颜色
    });
    this.map.addOverlay(polyline2);
  }

  //添加圆
  click3() {
    let circle = new BMap.Circle(new BMap.Point(116.404, 39.925), 500, {
      strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5
    });
    this.map.addOverlay(circle);
  }

  //添加多边形
  click4() {
    let polygon = new BMap.Polygon([
      new BMap.Point(116.387112, 39.920977),
      new BMap.Point(116.385243, 39.913063),
      new BMap.Point(116.394226, 39.917988),
      new BMap.Point(116.401772, 39.921364),
      new BMap.Point(116.41248, 39.927893)
    ], { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 });
    this.map.addOverlay(polygon);
  }

  //添加矩形
  click5() {
    let pStart = new BMap.Point(116.392214, 39.918985);
    let pEnd = new BMap.Point(116.41478, 39.911901);
    let rectangle = new BMap.Polygon([
      new BMap.Point(pStart.lng, pStart.lat),
      new BMap.Point(pEnd.lng, pStart.lat),
      new BMap.Point(pEnd.lng, pEnd.lat),
      new BMap.Point(pStart.lng, pEnd.lat)
    ], { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 });
    this.map.addOverlay(rectangle);
  }

  //删除所有覆盖物
  deleteClick() {
    this.map.clearOverlays();
  }

  ngOnInit() {
    this.ionViewDidLoad();
  }

}
