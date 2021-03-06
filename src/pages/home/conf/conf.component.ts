import { Component} from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-home-conf',
  templateUrl: 'conf.component.html'
})

export class ConfigPageComponent {

// ページのクラスのメンバ変数として追加

  /** フォーム項目 */
  form: FormGroup;
  /** フォーム項目のエラーテキスト */
  errors = {};
  /** フォーム項目名 */
  controlNames = {
    ipaddr: "xx.xxx.xxx.xxx",
    port: "nnn"
  };
  constructor(
    public navCtrl: NavController,
    navParams: NavParams,
    public formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      // 項目名: [初期値, ルール]
      ipaddr: ["", Validators.required],
      port: ["", [ Validators.required ]]
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

}

