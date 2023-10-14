import { Component, inject } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form.component';
import { TodoService } from '../shared/data-access/todo.service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <h1>Todo</h1>
    <app-todo-form (todoSubmitted)="todoService.addTodo($event)" />

    <ul>
      @for (todo of todoService.todos(); track todo.id){
      <li>
        <a routerLink="/detail/{{ todo.id }}">{{ todo.title }}</a>
      </li>
      }
    </ul>
  `,
  imports: [TodoFormComponent, RouterLink],
})
export default class HomeComponent {
  todoService = inject(TodoService);
}
