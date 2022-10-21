import { NgModule } from '@angular/core';
import { NgHelmetModule } from 'ng-helmet';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from '@/routes';

import { AppComponent } from './app.component';
import { HeadComponent } from './layout/head/head.component';
import { HomeComponent } from './modules/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './modules/about/about.component';
import { MovieComponent } from './modules/movie/movie.component';

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
    CardComponent,
    HeaderComponent,
    AboutComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgHelmetModule.forRoot({
      baseTitle: '| Movies App',
    }),
  ],
})
export class AppModule {}
