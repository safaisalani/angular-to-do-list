import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ReportComponent } from './report/report.component';
import { ToDoModule } from '../toDoCom/todo.module';
import { AboutComponent } from './about/about.component';
import { AddPrintOutDataComponent } from './add-print-out-data/add-print-out-data.component';
import { PrintreciptComponent } from './printrecipt/printrecipt.component';



@NgModule({
  declarations: [
    DashbordComponent,
    ReportComponent,
    AboutComponent,
    AddPrintOutDataComponent,
    PrintreciptComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToDoModule
  ]
})
export class PageModule { }
