import { Component, OnInit } from '@angular/core';
import { NavController,AlertController,
  ToastController } from '@ionic/angular';

@Component({
  selector: 'app-c03',
  templateUrl: './c03.page.html',
  styleUrls: ['./c03.page.scss'],
})
export class C03Page implements OnInit {

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public navCtrl: NavController) {
  }

  ngOnInit() {
  }
  resultMessage: string = '';

  async showAlert() {
    let alert = this.alertCtrl.create({
      header: '这是标题',
      subHeader: '这是子标题',
      buttons: ['确定']
    });
    (await alert).present();
  }

  async showConfirm() {
    let confirm = this.alertCtrl.create({
      header: '你确认要离开吗？',
      message: '数据尚未保存，如果此时离开，所有未保存的数据都会丢失！',
      buttons: [
        {
          text: '取消', handler: () => {
            this.resultMessage = '【确认警告框】的结果：单击了取消按钮';
          }
        },
        {
          text: '确定', handler: () => {
            this.resultMessage = '【确认警告框】的结果：单击了确认按钮';
          }
        }
      ]
    });
    (await confirm).present();
  }

  async showPrompt() {
    let prompt = this.alertCtrl.create({
      header: '登录',
      message: "请在下方输入你已经注册过的用户名。如果尚未注册，请先注册！",
      inputs: [
        { name: 'userName', placeholder: '用户名' },
      ],
      buttons: [
        {
          text: '取消', handler: () => {
            this.resultMessage = '【输入警告框】的结果：单击了取消按钮';
          }
        },
        {
          text: '确定', handler: (data: any) => {
            this.resultMessage = '【输入警告框】中输入的用户名：' + data['userName'];
          }
        }
      ]
    });
    (await prompt).present();
  }

  radioOpen: boolean = true;
  radioResult: string;
  async showRadio() {
    this.resultMessage = '';
    let alert = this.alertCtrl.create({
      header:"请选择颜色",
      inputs: [
        {
        type:"radio",
        label:"红色",
        value:"红色"
      },
      {
        type:"radio",
        label:"绿色",
        value:"绿色",
        checked:true
      },
      {
        type:"radio",
        label:"蓝色",
        value:"蓝色",
      }],
      buttons:[
        {
          text:"取消",
          handler: (data: any) => {
            this.resultMessage = '【单选警告框】的结果：单击了【取消】';
          }
        },
        {
          text:"确定",
          handler: (data: any) => {
            this.radioOpen = false;
            this.radioResult = data;
            this.resultMessage = '【单选警告框】的选择结果：' + data;
          }
        }
      ]
    });
    (await alert).present();
  }

  checkboxOpen: boolean;
  checkboxResult: string;
  async showCheckbox() {
    this.resultMessage = '';
    let alert = this.alertCtrl.create({
      header:"你参加过哪些项目？",
      inputs:[
        {
          type:"checkbox",
          label:"足球",
          value:"足球"
        },
        {
          type:"checkbox",
          label:"篮球",
          value:"篮球"
        },
        {
          type:"checkbox",
          label:"排球",
          value:"排球"
        }
      ],
      buttons:[
        {
          text:"取消"
        },
        {
          text:"确定",
          handler: (data: any) => {
            this.resultMessage = '【复选警告框】的结果：' + data;
            this.checkboxOpen = false;
            this.checkboxResult = data;
          }
        }
      ]
    });

    (await alert).present();
  }
  async presentToast() {
    let toast = this.toastCtrl.create({
      message: '数据保存成功！',
      duration: 3000,
      position: 'bottom'  //可选值：'top'，middle'，'bottom'
    });
    (await toast).present();
  }


}
