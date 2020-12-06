import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendamentoEditComponent } from './views/home/agendamento-edit/agendamento-edit.component';
import { AgedamentoListComponent } from './views/home/agedamento-list/agedamento-list.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [ 
  {
    path:'',
    component:AgedamentoListComponent
  },{
    path:'agendamento/:id',
    component:AgendamentoEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
