import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoAddComponent } from './to-do-add/to-do-add.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
      ToDoComponent,
      ToDoListComponent,
      ToDoAddComponent
  
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
  ,exports: [
    ToDoComponent
  ]
})
export class ToDoModule { }
