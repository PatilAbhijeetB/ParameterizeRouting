import { HomeComponent} from '../app/home-component/home.component';
import { AboutComponent} from '../app/about-component/about.component';
import { FooterComponent} from '../app/footer-component/footer.component';
import { NavComponent} from '../app/nav-component/nav.component';
import { BlogListComponent } from '../app/blog-list-component/blog-list.component';
import { BlogDetailComponent } from '../app/blog-detail-component/blog-details.component';
import { PageNotFound} from '../app/page-notfound-component/page-notfound.component';


import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';


@NgModule({
   
    imports:[RouterModule.forRoot([
        {path:'home', component : HomeComponent},
        {path:'about', component : AboutComponent},
        {path:'bloglist',component:BlogListComponent},
        {path:'blogDetails/:id',component:BlogDetailComponent},
       
    ])],
    exports:[RouterModule]
})
export class AppRouteModule{
}