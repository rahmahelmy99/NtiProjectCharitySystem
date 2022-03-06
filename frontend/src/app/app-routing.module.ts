import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { Err404Component } from './pages/err404/err404.component';
import { RegisterComponent } from './pages/register/register.component';
import { SinglecaseComponent } from './pages/blog/single-case/single-case.component';
import { CasesComponent } from './pages/blog/cases/cases.component';


const routes: Routes = [
  {path:"", redirectTo:"/login", pathMatch: 'full'},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"**", component:Err404Component},
{path:"category", children:[
  {path:":catId", component:CasesComponent},
  {path:"case/:catId", component:SinglecaseComponent},
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }





