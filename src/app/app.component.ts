import { Component } from '@angular/core';
//Import class so we can register it as dependency injection token
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  
  // No longer needed, now handled by TodoListHeaderComponent
  //newTodo: Todo = new Todo();

  //Ask Angular DI system to inject the dependency associated with the dependency injection 
  //token 'TodoDataService' and assign it to a property called 'todoDataService'
  constructor(private todoDataService: TodoDataService){

  }

  // addTodo(){
  //   this.todoDataService.addTodo(this.newTodo);
  //   this.newTodo = new Todo();
  // }

  onAddTodo(todo: Todo){
    this.todoDataService.addTodo(todo);
  }

  //Service is now available as this.todoDataService
  onToggleTodoComplete(todo){
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo){
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos(){
    return this.todoDataService.getAllTodos();
  }
}
