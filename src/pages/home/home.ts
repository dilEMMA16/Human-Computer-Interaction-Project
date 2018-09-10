import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PalettePage} from "../palette/palette";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToPalettePage(): void {
   this.navCtrl.push(PalettePage);
}

}
