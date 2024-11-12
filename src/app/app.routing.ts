import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'details/:id/:nombre/:localidad', component: DetailsComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
