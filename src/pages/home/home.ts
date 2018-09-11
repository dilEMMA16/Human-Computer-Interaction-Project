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

  navigateToPalettePage(theme): void {

    var palette1:string[];
    var palette2:string[]
    var palette3:string[]
    var palette4:string[]

    //based on what theme is = pass in palettes
    if (theme == "assets/imgs/8.png") //natural
    {
      palette1 = ["#baa994","#968663","#5d667b","#617b66"];
      palette2 = ["#7b6156","#e3d6cc","#848b8c","#c9beb5"];
      palette3 = ["#918696","#7b6972","#727b63","#d3af86"];
      palette4 = ["#617b66","#c9beb5","#d3af86","#7b6e58"];
    }

   this.navCtrl.push(PalettePage, {
     'data' : theme,
     'palette1' : palette1,
      'palette2' : palette2,
      'palette3' : palette3,
      'palette4' : palette4

   });
}

}
