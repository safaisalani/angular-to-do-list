import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: '', component: DashbordComponent
  }
  ,
  {
    path: 'Dashbord', component: DashbordComponent
  }
  ,  {
    path: 'Reports', component: ReportComponent
  }
  ,{
    path: 'About',component: AboutComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
