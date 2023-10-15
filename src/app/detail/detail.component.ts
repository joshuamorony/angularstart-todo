import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../shared/data-access/todo.service';

@Component({
  standalone: true,
  selector: 'app-detail',
  template: `
    @if (todo(); as todo){
    <h2>{{ todo.title }}</h2>
    <p>{{ todo.description }}</p>
    } @else {
    <p>Could not find todo...</p>
    }
  `,
})
export default class DetailComponent {
  private route = inject(ActivatedRoute);
  private todoService = inject(TodoService);

  private paramMap = toSignal(this.route.paramMap);

  todo = computed(() =>
    this.todoService
      .todos()
      .find((todo) => todo.id === this.paramMap()?.get('id'))
  );
}
