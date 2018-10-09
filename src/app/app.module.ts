import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent} from '../app/home-component/home.component';
import { AboutComponent} from '../app/about-component/about.component';
import { FooterComponent} from '../app/footer-component/footer.component';
import { NavComponent} from '../app/nav-component/nav.component';
import { BlogListComponent } from '../app/blog-list-component/blog-list.component';
import { BlogDetailComponent } from '../app/blog-detail-component/blog-details.component';
import { PageNotFound } from '../app/page-notfound-component/page-notfound.component';


import {AppRouteModule} from '../app/app-route.module';

import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [HomeComponent,AboutComponent,FooterComponent,NavComponent,BlogListComponent,BlogDetailComponent,PageNotFound,
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }