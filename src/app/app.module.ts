import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { EmailComposer } from '@ionic-native/email-composer';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PalettePage } from '../pages/palette/palette';
import { CustomPalettePage } from '../pages/custompalette/custompalette';
import { EmailPage } from '../pages/email/email';
import { FontPage } from '../pages/font/font';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PalettePage,
    CustomPalettePage,
    EmailPage,
    FontPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PalettePage,
    CustomPalettePage,
    EmailPage,
    FontPage
  ],
  providers: [
    StatusBar,
    EmailComposer,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
