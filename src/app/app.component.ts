import { Component, OnInit } from '@angular/core';
//Import class so we can register it as dependency injection token
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit{


  todos: Todo[] = [];
  
  // No longer needed, now handled by TodoListHeaderComponent
  //newTodo: Todo = new Todo();

  //Ask Angular DI system to inject the dependency associated with the dependency injection 
  //token 'TodoDataService' and assign it to a property called 'todoDataService'
  constructor(private todoDataService: TodoDataService){

  }

  ngOnInit(): void {
    this.todoDataService
      .getAllTodos()
      .subscribe((todos) => {
        this.todos = todos;
      });
  }

  // addTodo(){
  //   this.todoDataService.addTodo(this.newTodo);
  //   this.newTodo = new Todo();
  // }

  onAddTodo(todo){
    this.todoDataService
      .addTodo(todo)
      .subscribe((newTodo => {
        this.todos = this.todos.concat(newTodo);
      }));
  }

  //Service is now available as this.todoDataService
  onToggleTodoComplete(todo){
    this.todoDataService
      .toggleTodoComplete(todo)
      .subscribe((updatedTodo) => {
        todo = updatedTodo;
      });
  }

  onRemoveTodo(todo){
    this.todoDataService
      .deleteTodoById(todo.id)
      .subscribe((_) => {
        this.todos = this.todos.filter((t) => t.id !== todo.id);
      });
  }

  // get todos(){
  //   return this.todoDataService.getAllTodos();
  // }
}
