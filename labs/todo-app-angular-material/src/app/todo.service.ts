import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: any[] = [
    {id: 1, title: "I'm your first Todo!"}
  ];
  constructor() { }

  getTodos(){
    return this.todos;
  }

  addTodo(id:number, title:string){
    return this.todos.push({id: id, title: title});
  }

  deleteTodo(id:number){
    let i = id-1;
    if (i > -1) {
      this.todos.splice(i, 1);
    }
    return this.todos;
  }
}