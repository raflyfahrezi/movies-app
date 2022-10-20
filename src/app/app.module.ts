import { NgModule } from '@angular/core';
import { NgHelmetModule } from 'ng-helmet';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  providers: [],
  bootstrap: [AppComponent],
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    NgHelmetModule.forRoot({
      baseTitle: 'Movies App',
    }),
  ],
})
export class AppModule {}
