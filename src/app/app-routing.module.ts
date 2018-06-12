import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageAboutUsComponent } from './page-about-us/page-about-us.component';
import { PageServicesComponent } from './page-services/page-services.component';
import { PagePortfolioComponent } from './page-portfolio/page-portfolio.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PagePortafolioFullComponent } from './page-portafolio-full/page-portafolio-full.component';
import { PageItemComponent } from './page-item/page-item.component';



const appRoutes: Routes = [
    
    {
        path:'',
        component:IndexComponent,
        pathMatch:'full'
    },
    
    {
        path:'about-us',
        component:PageAboutUsComponent,
    },
    
    {
        path:'services',
        component: PageServicesComponent
    },
    {
        path:'images',
        component: PagePortfolioComponent
    },
    {
        path:'contact-us',
        component: ContactUsComponent
    },
    {
        path:'portfolio',
        component: PagePortafolioFullComponent
    },
    {
        path:'item/:id',
        component: PageItemComponent
    },
    {
        path:'item',
        redirectTo:'portfolio',
        pathMatch:'full'
    },
    /*
    {
        path:'admin',
        component:AdminComponent,
        children:[
            {
                path:'find',
                component:BuscarComponent
            },
            {
                path:'delete',
                component:DeleteComponent
            },
            {
                path:'add',
                component:AgregarComponent
            },
            {
                path:'showP',
                component:ShowPComponent
            }
        ]
    },
    */
    {   path: '**',  
        component: NotFoundComponent,
        
    },
    
    
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class appRoutingModule{

}