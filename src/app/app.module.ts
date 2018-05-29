import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './index/index.component';
import { CaruselComponent } from './components/carusel/carusel.component';
import { ServicesComponent } from './components/services/services.component';
import { CommentComponent } from './components/comment/comment.component';
import { AboutUsTextComponent } from './components/about-us/about-us-text/about-us-text.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { StatsComponent } from './components/stats/stats.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CommentsComponent } from './components/comments/comments.component';
import { BlogComponent } from './components/blog/blog.component';
import { PriceComponent } from './components/price/price.component';
import { MapsAComponent } from './components/maps-a/maps-a.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { appRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageAboutUsComponent } from './page-about-us/page-about-us.component';
import { PageServicesComponent } from './page-services/page-services.component';
import { PagePortfolioComponent } from './page-portfolio/page-portfolio.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    CaruselComponent,
    ServicesComponent,
    CommentComponent,
    AboutUsTextComponent,
    AboutUsComponent,
    StatsComponent,
    PortfolioComponent,
    CommentsComponent,
    BlogComponent,
    PriceComponent,
    MapsAComponent,
    ContactComponent,
    FooterComponent,
    NotFoundComponent,
    PageAboutUsComponent,
    PageServicesComponent,
    PagePortfolioComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
