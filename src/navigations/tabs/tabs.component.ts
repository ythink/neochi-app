import { Component } from '@angular/core';

import { HomePageComponet as HomePageComponet } from "../../pages/home/main/main.component";
import { IndexPageComponent as DetectionIndexPageComponent } from '../../pages/detection/index/index.component';
import { IndexPageComponent as RemoconIndexPageComponent } from '../../pages/remocon/index/index.component';
import { IndexPageComponent as ActionIndexPageComponent } from '../../pages/action/index/index.component';


@Component({
  templateUrl: './tabs.component.html'
})
export class TabsComponent {

  tab1Root = HomePageComponet;
  tab2Root = DetectionIndexPageComponent;
  tab3Root = RemoconIndexPageComponent;
  tab4Root = ActionIndexPageComponent;

  constructor() {
  }

}
