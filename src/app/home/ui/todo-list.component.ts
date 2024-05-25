import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Todo } from '../../shared/interfaces/todo';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  template: `
    <ul>
      @for (todo of todos(); track todo.id) {
        <li>
          <a routerLink="/detail/{{ todo.id }}">{{ todo.title }}</a>
        </li>
      } @empty {
        <li>Nothing to do!</li>
      }
    </ul>
  `,
  imports: [RouterLink],
  styles: [
    `
      ul {
        margin: 0;
        padding: 1rem;
      }
    `,
  ],
})
export class TodoListComponent {
  todos = input.required<Todo[]>();
}
