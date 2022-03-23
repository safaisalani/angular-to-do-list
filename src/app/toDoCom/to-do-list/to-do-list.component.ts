import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'todoList',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
@Input() parentItem: Todo;
@Output() delEvent: EventEmitter<Todo> = new EventEmitter()
@Output() checkEvent: EventEmitter<Todo> = new EventEmitter()
@Output() update: EventEmitter<Todo> = new EventEmitter()
@Output() newData: EventEmitter<Todo> = new EventEmitter()


class:string;
id:number;
name:string;
task:string;
newElement:Todo;



  constructor() { }

  ngOnInit(): void {
    this.name = this.parentItem.student_name;
    this.class = this.parentItem.student_class;
    this.task = this.parentItem.task;
    this.id = this.parentItem.id;
  }

  del(parentItem: Todo){
    this.delEvent.emit(parentItem)
    // console.log(parentItem);
    
  }
  check(parentItem: Todo){
    this.checkEvent.emit(parentItem)
    // console.log(parentItem);
    
  }
  updateElement(parentItem: Todo){
    

    this.newElement = {
      
      id: this.id,
      student_class: this.class,
      student_name: this.name,
      task:this.task,
      active: true
  }
    this.newData.emit(this.newElement)
    this.update.emit(parentItem)
  }

}
