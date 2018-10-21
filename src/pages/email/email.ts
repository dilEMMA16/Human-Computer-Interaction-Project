import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { CustomPalettePage} from "../custompalette/custompalette";
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-email',
  templateUrl: 'email.html'
})
export class EmailPage {

  color1: any;
  color2: any;
  color3: any;
  color4: any;
  email: any;
  theme: any;



  constructor(public navCtrl: NavController, public navParams : NavParams,private emailComposer: EmailComposer) {
    this.color1 = navParams.get('color1');
    this.color2 = navParams.get('color2');
    this.color3 = navParams.get('color3');
    this.color4 = navParams.get('color4');
    this.email = "";
    this.theme = "assets/imgs/"+navParams.get('data')+".png";

  }

  navigateToHomePage() {
      this.navCtrl.pop();
      this.navCtrl.pop();
  }

  navigateToPalletePage() {
    this.navCtrl.pop();

  }





  remove(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1);

}

}


sendEmail() :void {

  //  let el: HTMLElement = document.getElementById("selectedEmail");

    //let emailContent = color1 + " " + color2 + " " + color3 + " " + color4;
    let emailContent = "//put in css file:<br>:root{<br>--color-one:" + this.color1 +";<br>--color-two:" + this.color2 +";<br>--color-three:" + this.color3 + ";<br>--color-four:" + this.color4 + ";<br>}<br>//to use these css variables =   background-color: var(--color-one);"

    let email = {
      to: '',
      cc: '',
      attachments: [
      ],
      subject: 'Eye for Design Theme',
      body: emailContent,
      isHtml: true
    };

    this.emailComposer.open(email);
    console.log("send email");
  }



customThemeChosen(): void {
  var blues = ["#5d667b","#55707b","#45547b","#5765b0","#39457b","#236c75","#34a0ae","#040f7b","#6dbdc9","#7ab2b9","#678997","#80a9b0","#6683d0","#82bdd3","#33377b","#61808f","#64c8c6","#121f7b","#a4afe3","#477aed","#7baefb","#5a717b","#60d1d3","#477aed","#2360bf","#6f9df8","#aacaf4","#6f7fbe","#60b5c1","#4d687b","#7698b8","#2badb8","#1f40b8"];
  var browns= ["#baa994","#968663","#7b6156","#7b6972","#7b6e58","#7b6a72","#594446","#bca67f","#67697b","#7b4600","#7b625e","#bf834e","#7b403b","#7b5a43","#7b4424","#b7866d","#7b615b","#7b5650"];
  var greens = ["#617b66","#727b63","#6c7b4c","#c5be8b","#848b8c","#8cae87","#7acdad","#d5ef9a","#afc185","#5c7b69","#6c818f","#74ab86","#2e717b","#589a1f","#157b5c","#617b62","#787b39","#acd247","#83d780","#68ad74","#cae67c","#caeff4","#61c277","#499259","#647a7b","#b8b14e","#77b800"];
  var yellows = ["#d3af86","#e3a83e","#b79533","#fdcb73","#c29a50","#bfb06b","#d6a149","#ffb822","#d9a42e","#f8e997","#ffbd4a","#feba08","#dbff6b"];
  var creams = ["#e3d6cc","#c9beb5","#c9beb5","#e3d6cc","#cdb98f","#e1d9d3"];
  var purples = ["#918696","#9a82ae","#524c7b","#a275a5","#b958c0","#3e427d","#57017b","#584e9a","#7a3a7b","#6f467b","#4b407b","#7b1877","#b760e6","#dfd1ef","#5546b8","#9e38b8","#575db8","#cb07bd"];
  var oranges = ["#bf834e","#8e6350","#eb7244","#e98441","#cd745f","#ee9547","#d3725b","#cd7746","#ba6a00","#eb8119","#ab6141","#e8926e","#ffab37","#ee9547"];
  var reds = ["#c94300","#7b1416","#d7000b","#8c412a","#e76753","#ea4627","#b80716"];
  var pinks = ["#7b536e","#d9b1b0","#f3bbaa","#a16c6a","#745a7b","#e76753","#e8926e","#7b3446","#ff9aac","#ef447a","#cdaad2","#b83e81"];
  var grays = ["#c5bde1","#a8a8a8","#78787b"];



  this.navCtrl.push(CustomPalettePage, {
    'blues' : blues,
     'browns' : browns,
     'greens' : greens,
     'yellows' : yellows,
     'creams' : creams,
     'purples' : purples,
     'oranges' : oranges,
     'reds' : reds,
     'pinks' : pinks,
     'grays' : grays,
     'theme' : "custom"

  });


}


}
