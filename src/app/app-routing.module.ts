import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageAboutUsComponent } from './page-about-us/page-about-us.component';



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
    /*
    {
        path:'login',
        component: LoginComponent
    },
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