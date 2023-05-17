export type Todo = {
  id: number;
  content: string;
  completed: boolean;
};

export interface TodoState {
  todos: Todo[];
}
