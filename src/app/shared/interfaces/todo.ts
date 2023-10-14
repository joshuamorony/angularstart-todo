export interface Todo {
  id: string;
  title: string;
  description: string;
}

export type CreateTodo = Omit<Todo, 'id'>;
