import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageAboutUsComponent } from './page-about-us/page-about-us.component';
import { PageServicesComponent } from './page-services/page-services.component';
import { PagePortfolioComponent } from './page-portfolio/page-portfolio.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



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
        path:'portfolio',
        component: PagePortfolioComponent
    },
    {
        path:'contact-us',
        component: ContactUsComponent
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