import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { CarListComponent } from './components/cars/car-list/car-list.component';
import { DogListComponent } from './components/dogs/dog-list/dog-list.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CarListComponent,
    DogListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
