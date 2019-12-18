import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EmpListComponent } from './emp-list/emp-list.component';




const routes: Routes = [
  // {path: '',redirectTo: '/registration',pathMatch: 'full'},
  {path: '', redirectTo:'registration', pathMatch: 'full' },
  {path: 'registration', component: RegistrationComponent },
  {path: 'login', component: LoginComponent },
  {path: 'emp-list', component: EmpListComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
