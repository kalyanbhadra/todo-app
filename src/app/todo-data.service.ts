import { Injectable } from '@angular/core';
import {Todo} from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoDataService {

  //Placeholder for last id so we can simulate automatic incrementing of ids
  lastId: number = 0;
  todos: Todo[] = [];

  constructor(private apiService: ApiService) { }

  //Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    return this.apiService.createTodo(todo);
  }

  //Simulate DELETE /todos/:id
  deleteTodoById(todoId: number): Observable<Todo> {
    return this.apiService.deleteTodoById(todoId);
  }

  //Simulate PUT /todos/:id
  updateTodoById(todo: Todo): Observable<Todo> {
    return this.apiService.updateTodo(todo);
  }

  //Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.apiService.getAllTodos();
  }

  //Simulate GET /todos/:id
  getTodoById(todoid: number): Observable<Todo> {
    return this.apiService.getTodoById(todoid);
  }

  //Toggle todo complete
  toggleTodoComplete(todo: Todo){
    todo.complete = !todo.complete;
    return this.apiService.updateTodo(todo);
  }

}
