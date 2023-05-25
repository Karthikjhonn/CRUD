import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'adduser', component: FormComponent},
  { path: 'user', component:MainComponent  },
  { path: 'editUser/:id', component:FormComponent},
  { path: '', redirectTo: 'adduser', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
