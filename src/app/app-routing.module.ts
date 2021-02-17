import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoCochesComponent } from './components/cars/listado-coches/listado-coches.component';
import { ListadoComponent } from './components/users/listado/listado.component';

const routes: Routes = [
  { path: 'cars', component: ListadoCochesComponent },
  { path: '',      component: ListadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
