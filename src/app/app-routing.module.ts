import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManufacturerDashComponent } from './manufacturer-dash/manufacturer-dash.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'manufacturer_dash',component: ManufacturerDashComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
