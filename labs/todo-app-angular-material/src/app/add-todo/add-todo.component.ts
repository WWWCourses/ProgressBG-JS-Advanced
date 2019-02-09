import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TodoService } from '../todo.service';

export interface DialogData {
  todo: string;
}

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  constructor(public dialogRef: MatDialogRef<AddTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private todoData: TodoService){

  }

  todos: any[] = this.todoData.getTodos();
  lastId: number = this.todos[this.todos.length-1].id;

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(data): void {
    // console.log(`data: ${data}`);
    this.todoData.addTodo(this.lastId+1, data);
    this.dialogRef.close();
  }

}


