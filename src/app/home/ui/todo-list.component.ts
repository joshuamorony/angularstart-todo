import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Todo } from '../../shared/interfaces/todo';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  template: `
    <ul>
      @for (todo of todos; track todo.id){
      <li>
        <a routerLink="/detail/{{ todo.id }}">{{ todo.title }}</a>
      </li>
      }
    </ul>
  `,
  imports: [RouterLink],
})
export class TodoListComponent {
  @Input({ required: true }) todos!: Todo[];
}
