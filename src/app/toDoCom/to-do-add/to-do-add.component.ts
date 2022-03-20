import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'addToDo',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.scss']
})
export class ToDoAddComponent implements OnInit {

  @Output() addEvent: EventEmitter<Todo> = new EventEmitter()

  name:string;
  class:string;
  id:number;
  newElement: Todo;  

  constructor() { }

  ngOnInit(): void {
  }
  AddElement(){
    console.log(this.name);

    this.newElement = {
      
        id: this.id,
        student_class: this.class,
        student_name: this.class,
        active: true
    }
    this.addEvent.emit(this.newElement)

    
    
  }
}
