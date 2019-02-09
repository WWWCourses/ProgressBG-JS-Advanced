import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  constructor(private data: TodoService) { }

  ngOnInit() {
  }

  todos: any[] = this.data.getTodos();

  deleteItem(id){
    this.data.deleteTodo(id);
    return this.todos;
  }
}

