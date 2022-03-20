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

  constructor() { }

  ngOnInit(): void {
  }

  del(parentItem: Todo){
    this.delEvent.emit(parentItem)
    // console.log(parentItem);
    
  }
  check(parentItem: Todo){
    this.checkEvent.emit(parentItem)
    // console.log(parentItem);
    
  }

}
