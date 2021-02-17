import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './components/users/listado/listado.component';
import { ListadoCochesComponent } from './components/cars/listado-coches/listado-coches.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    ListadoCochesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
