import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'toDo',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  todoElements: Todo[];
  localItem:string;
  constructor() {
    this.localItem = localStorage.getItem("todoElements")
   if (this.localItem == null){
     this.todoElements = [];
   }else{
     this.todoElements = JSON.parse(this.localItem)
   }

    

  }

  ngOnInit(): void {
  }
  delItem(childTodo: Todo){
    // console.log(todo);
    const index = this.todoElements.indexOf(childTodo);
    this.todoElements.splice(index,1)
    localStorage.setItem("todoElements" , JSON.stringify(this.todoElements))
    
  }
  addElement(childTodo: Todo){
    this.todoElements.push(childTodo)
    localStorage.setItem("todoElements" , JSON.stringify(this.todoElements))

  }
  checked(childTodo: Todo){
    const index = this.todoElements.indexOf(childTodo);
    this.todoElements[index].active = !this.todoElements[index].active 
    localStorage.setItem("todoElements" , JSON.stringify(this.todoElements))


  }

  newClas:string;
  newName:string;
  newId:number;
  newTask:string;


  newUpdateData(childTodo: Todo){
    this.newClas = childTodo.student_class
    this.newName = childTodo.student_name
    this.newId = childTodo.id
    this.newTask = childTodo.task

  }

  updateData(childTodo: Todo){
    
    const index = this.todoElements.indexOf(childTodo);
  //  console.log(this.todoElements[index]);
   
    
    this.todoElements[index].student_class = this.newClas;  
    this.todoElements[index].student_name = this.newName; 
    this.todoElements[index].id = this.newId; 
    this.todoElements[index].task = this.newTask; 
    localStorage.setItem("todoElements" , JSON.stringify(this.todoElements))

  }
}
