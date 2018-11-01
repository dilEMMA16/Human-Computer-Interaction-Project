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
import { SavedPage } from '../pages/saved/saved';
import { SaveThemeProvider } from '../providers/save-theme/save-theme';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PalettePage,
    CustomPalettePage,
    EmailPage,
    FontPage,
    SavedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PalettePage,
    CustomPalettePage,
    EmailPage,
    FontPage,
    SavedPage
  ],
  providers: [
    StatusBar,
    EmailComposer,
    SaveThemeProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
