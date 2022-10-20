import { NgModule } from '@angular/core';
import { NgHelmetModule } from 'ng-helmet';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadComponent } from './layout/head/head.component';
import { HomeComponent } from './modules/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';

@NgModule({
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    HeadComponent,
    FooterComponent,
    WrapperComponent,
    PageWrapperComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHelmetModule.forRoot({
      baseTitle: '| Movies App',
    }),
  ],
})
export class AppModule {}
