import { Component, OnInit } from '@angular/core';
import { TodoListService} from './todo-list.service'
import {Todo} from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
  }
  addTodo(inputRef: HTMLInputElement): void {
    // console.log(inputRef.value);
    // inputRef.value = '';
    const todo = inputRef.value.trim();

    if (todo) {
      this.todoListService.add(todo);
      inputRef.value = '';
    }
  }

  getList(): Todo[] {
    return this.todoListService.getList();
  }

  remove(index: number): void {
    this.todoListService.remove(index);
  }
}
