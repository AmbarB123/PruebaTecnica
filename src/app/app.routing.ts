import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import {HomeComponent} from './components/home/home.component';
import {ProductosComponent} from './components/productos/productos.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {PromotorComponent} from './components/promotor/promotor.component';



const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'promotor', component: PromotorComponent},
]

//Exportar rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)