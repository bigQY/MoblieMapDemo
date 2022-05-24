import { Component, OnInit } from '@angular/core';
import { NavController , AlertController} from '@ionic/angular';

@Component({
  selector: 'app-d08',
  templateUrl: './d08.page.html',
  styleUrls: ['./d08.page.scss'],
})
export class D08Page implements OnInit {

  constructor(public alertCtrl: AlertController,public navCtrl: NavController) { }

  ngOnInit() {
  }

  //步行路线规划
  click1() {
    let map = new BMap.Map("bdmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);
    map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用

    let walking = new BMap.WalkingRoute(map, {
      renderOptions: {
        map: map,
        autoViewport: true
      },
      onSearchComplete: (results) => {
        if (walking.getStatus() !== BMAP_STATUS_SUCCESS) {
          return;
        }
        // 获取第一条方案
        let plan = results.getPlan(0);
        // 获取驾车方案的线路数
        let routesNum = plan.getNumRoutes();
        // 获取每个关键步骤,并输出到页面
        let s = [];
        for (let j = 0; j < routesNum; j++) {
          let route = plan.getRoute(j);
          for (let i = 0; i < route.getNumSteps(); i++) {
            let step = route.getStep(i);
            s.push((i + 1) + ". " + step.getDescription(true));
          }
        }
        document.getElementById("r-result").innerHTML = s.join("<br/>");
      }
    });
    let start = new BMap.Point(116.310791, 40.003419);
    let end = new BMap.Point(116.326419, 40.003519);
    walking.search(start, end);
  }

  //骑行路线规划
  click2() {
    let map = new BMap.Map("bdmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);
    map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用

    let riding = new BMap.RidingRoute(map, {
      renderOptions: {
        map: map,
        autoViewport: true
      }
    });
    let start = new BMap.Point(116.310791, 40.003419);
    let end = new BMap.Point(116.386419, 40.003519);
    riding.search(start, end);
  }

  //驾车路线规划
  click3() {
    let map = new BMap.Map("bdmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
    map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用

    let output = "从天安门到百度大厦驾车需要";
    let transit = new BMap.DrivingRoute(map, {
      renderOptions: {
        map: map,
        autoViewport: true
      },
      onSearchComplete: (results) => {
        if (transit.getStatus() != BMAP_STATUS_SUCCESS) {
          return;
        }
        let plan = results.getPlan(0);
        output += plan.getDuration(true) + "\n"; //获取时间
        output += "总路程为：";
        output += plan.getDistance(true) + "\n"; //获取距离
      },
      onPolylinesSet: (routes) => {
        setTimeout(async () => {
          (await this.alertCtrl.create({
            header: output,
            buttons: ['确定']
          })).present();
        }, 1000);
      }
    });
    //天安门
    let start = new BMap.Point(116.310791, 40.003419);
    //百度大厦
    let end = new BMap.Point(116.486419, 39.877282);
    transit.search(start, end);
  }

  //距离计算
  click4() {
  }
}
