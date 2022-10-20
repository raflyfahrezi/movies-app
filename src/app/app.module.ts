import { NgModule } from '@angular/core';
import { NgHelmetModule } from 'ng-helmet';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { HeadComponent } from './layout/head/head.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

@NgModule({
  providers: [],
  bootstrap: [AppComponent],
  declarations: [AppComponent, HomeComponent, PageWrapperComponent, HeadComponent, FooterComponent, WrapperComponent],
  imports: [
    BrowserModule,
    NgHelmetModule.forRoot({
      baseTitle: '| Movies App',
    }),
  ],
})
export class AppModule {}
