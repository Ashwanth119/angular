import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'' ,redirectTo:'login' ,pathMatch:"full"},
  {path:'login' ,component:LoginComponent, title:"Login Page"},
  {path:'register' ,component:RegisterComponent, title:"Register Page"},
  {path:'home' ,component:HomeComponent, title:"Home Page"},
  // {path:'display-users' ,component:DisplayUsersComponent, title:"Detailed view"},
  // {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
