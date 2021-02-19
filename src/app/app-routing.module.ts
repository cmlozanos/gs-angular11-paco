import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './components/cars/car-list/car-list.component';
import { UserListComponent } from './components/users/user-list/user-list.component';

const routes: Routes = [
  { path: 'cars', component: CarListComponent },
  { path: '',      component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
