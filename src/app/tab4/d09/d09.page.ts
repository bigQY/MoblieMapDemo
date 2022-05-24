import { Component, OnInit } from '@angular/core';
import { Henu, KFBZ, HenuJSJXY } from '../../providers/bdmap-common';

@Component({
  selector: 'app-d09',
  templateUrl: './d09.page.html',
  styleUrls: ['./d09.page.scss'],
})
export class D09Page implements OnInit {

  constructor() { }

  bmap: BMap.Map;
  result: HTMLDivElement;

  ionViewDidLoad() {
    this.result = document.getElementById("r-result") as HTMLDivElement;
    this.bmap = new BMap.Map("bdmap");
    this.bmap.centerAndZoom(new BMap.Point(Henu.lng, Henu.lat), 14);
    // 仅当设置城市信息时，MapTypeControl的切换功能才可用
    this.bmap.setCurrentCity("开封");
    this.bmap.enableScrollWheelZoom();
  }

  //单个点沿线运动
  click1() {
    this.bmap.clearOverlays();
    this.result.innerText = '';

    let start = new BMap.Point(HenuJSJXY.lng, HenuJSJXY.lat);
    let end = new BMap.Point(KFBZ.lng, KFBZ.lat);
    let myIcon = new BMap.Icon("/assets/imges/Mario.png", new BMap.Size(32, 70), {
      //小车图片
      imageOffset: new BMap.Size(0, 0) //图片的偏移量。让图片底部中心对准坐标点。
    });

    //骑行示例
    let plan;
    let riding = new BMap.RidingRoute(this.bmap, {
      renderOptions: { map: this.bmap, autoViewport: true },
      onSearchComplete: (results) => {
        if (riding.getStatus() == BMAP_STATUS_SUCCESS) {
          // 获取第一条方案
          plan = results.getPlan(0);
          // 获取骑行方案的线路数
          let routesNum = plan.getNumRoutes();
          // 获取每个关键步骤，并输出到页面
          let s = [];
          for (let j = 0; j < routesNum; j++) {
            let r = plan.getRoute(j);
            for (let i = 0; i < r.getNumSteps(); i++) {
              let step = r.getStep(i);
              s.push((i + 1) + ". " + step.getDescription(true));
            }
          }
          this.result.innerHTML = s.join("<br>");
        }

        // 获取方案的第1条骑行线路，
        // 然后通过骑行实例，获得一系列点的数组
        let points = plan.getRoute(0).getPath();
        let ridMarker = new BMap.Marker(points[0], {
          icon: myIcon
        });
        this.bmap.addOverlay(ridMarker);

        let i = 0;
        let paths = points.length;    //获得有几个点
        let resetMarkPoint = () => {
          ridMarker.setPosition(points[i]);
          if (i < paths) {
            setTimeout(() => {
              i++;
              resetMarkPoint();
            }, 100);
          }
        };
        setTimeout(() => { resetMarkPoint(); }, 100);
      }
    });
    //模拟导航第1条骑行线路
    riding.search(start, end);
  }

  //多点沿线运动
  click2() {
    //let map = new BMap.Map("bdmap");
    //map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);
    let bounds = null;
    let linesPoints = null;
    let start1 = new BMap.Point(HenuJSJXY.lng, HenuJSJXY.lat);
    let start2 = new BMap.Point(KFBZ.lng, KFBZ.lat);
    let end = new BMap.Point(HenuJSJXY.lng - 0.03, HenuJSJXY.lat + 0.009);
    let myIcon = new BMap.Icon("assets/imges/Mario.png", new BMap.Size(32, 70), {
      imageOffset: new BMap.Size(0, 0)
    });

    let initLine = () => {
      bounds = new Array();
      linesPoints = new Array();
      this.bmap.clearOverlays();        // 清空覆盖物

      let driving1 = new BMap.DrivingRoute(this.bmap, {
        onSearchComplete: drawLine
      });
      driving1.search(start1, end);  // 搜索一条线路

      let driving2 = new BMap.DrivingRoute(this.bmap, {
        onSearchComplete: drawLine
      });
      driving2.search(start2, end);  // 搜索一条线路
    };

    let run = () => {
      let resetMkPoint = (i, len, pts, carMk) => {
        carMk.setPosition(pts[i]);
        if (i < len) {
          setTimeout(() => {
            i++;
            resetMkPoint(i, len, pts, carMk);
          }, 100);
        }
      };
      for (let m = 0; m < linesPoints.length; m++) {
        let pts = linesPoints[m];
        let len = pts.length;
        let carMk = new BMap.Marker(pts[0], { icon: myIcon });
        this.bmap.addOverlay(carMk);
        resetMkPoint(1, len, pts, carMk)
      }
    };

    let drawLine = (results) => {
      let opacity = 0.45;
      let planObj = results.getPlan(0);
      let b = new Array();
      let addMarkerFunction = (point, imgType, index, title?) => {
        let url;
        let width;
        let height;
        let myIcon;
        // imgType:1的场合：url为起点和终点的图(index=0为起点，index=1为终点)
        if (imgType == 1) {
          url = 'assets/imges/kitten2.jpg';//"assets/imgs/dest_markers.png";
          width = 32;//42;
          height = 32;//34;
          myIcon = new BMap.Icon(url, new BMap.Size(width, height), {
            imageOffset: new BMap.Size(0, 0 - index * height)
          });
        } else {
          // imgType:2的场合，为车的图形
          url = 'assets/imges/puppy1.jpg';//"assets/imgs/trans_icons.png";
          width = 32;//22;
          height = 32;//25;
          let d = 32;//25;
          let cha = 0; //
          let jia = 0; //驾车？
          if (index == 2) {
            //d = 21;
            cha = 5;
            jia = 1;
          }
          myIcon = new BMap.Icon(url, new BMap.Size(width, d), {
            imageOffset: new BMap.Size(0, 0 - index * height - cha)
          });
        }

        let marker = new BMap.Marker(point, { icon: myIcon });
        if (title != null && title != "") {
          marker.setTitle(title);
        }
        // 起点和终点放在最上面
        if (imgType == 1) {
          marker.setTop(true);
        }
        this.bmap.addOverlay(marker);
      };
      let addPoints = (points) => {
        for (let i = 0; i < points.length; i++) {
          bounds.push(points[i]);
          b.push(points[i]);
        }
      };
      // 绘制驾车步行线路
      for (let i = 0; i < planObj.getNumRoutes(); i++) {
        let route = planObj.getRoute(i);
        if (route.getDistance(false) <= 0) { continue; }
        addPoints(route.getPath());
        // 驾车线路
        if (route.getRouteType() == BMAP_ROUTE_TYPE_DRIVING) {
          this.bmap.addOverlay(new BMap.Polyline(route.getPath(), {
            strokeColor: "#0030ff",
            strokeOpacity: opacity,
            strokeWeight: 6,
            enableMassClear: true
          }));
        } else {
          // 步行线路有可能为0
          this.bmap.addOverlay(new BMap.Polyline(route.getPath(), {
            strokeColor: "#30a208",
            strokeOpacity: 0.75,
            strokeWeight: 4,
            enableMassClear: true
          }));
        }
      }
      this.bmap.setViewport(bounds);
      // 开始点
      addMarkerFunction(results.getStart().point, 1, 0, '起点');
      // 终点
      addMarkerFunction(results.getEnd().point, 1, 1, '终点');
      linesPoints[linesPoints.length] = b;
    };

    initLine();
    setTimeout(() => { run(); }, 1500);
  }


  ngOnInit() {
    this.ionViewDidLoad();
  }

}
