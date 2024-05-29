import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EnglishComponent } from './pages/english/english.component';
import { EconomicsComponent } from './pages/economics/economics.component';
import { ComputerapplicationComponent } from './pages/computerapplication/computerapplication.component';
import { TtmComponent } from './pages/ttm/ttm.component';
import { CommerceComponent } from './pages/commerce/commerce.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"english",component:EnglishComponent},
    {path:"economics",component:EconomicsComponent},
    {path:"computerapplication",component:ComputerapplicationComponent},
    {path:"travel&tourism",component:TtmComponent},
    {path:"commerce",component:CommerceComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent}
];
