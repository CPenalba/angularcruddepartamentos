import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { appRoutingProvider, routing } from './app.routing';
import { provideHttpClient } from '@angular/common/http';
import { ServiceDepatamentos } from './services/service.departamentos';

@NgModule({
  declarations: [AppComponent, MenuComponent, HomeComponent],
  imports: [BrowserModule, routing, FormsModule],
  providers: [appRoutingProvider, provideHttpClient(), ServiceDepatamentos],
  bootstrap: [AppComponent],
})
export class AppModule {}
