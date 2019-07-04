import { Injectable } from '@angular/core';
import { Todo} from './todo.model';
import {TodoStatusType} from './todo-status-type.enum';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  private list: Todo[] = [];

  add(title: string): void {
    if (title || title.trim()) {
      this.list.push(new Todo(title));
    }
  }

  getList(): Todo[] {
    return this.list;
  }

  remove(index: number): void {
    this.list.splice(index, 1);
  }

  removeCompleted(): void {
    this.list = this.getWithCompleted(false);
  }

  getWithCompleted(completed: boolean): Todo[] {
    return this.list.filter(todo => todo.done === completed);
  }
}
