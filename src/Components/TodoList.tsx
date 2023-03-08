import { For } from 'solid-js';
import type { Accessor, Setter, Component } from 'solid-js';
import { Todo } from './Todo';


interface Props {
  todoList: { name: string, done: Accessor<boolean>, setDone: Setter<boolean> }[];
  removeTodo: (index: number) => void;
}

export const TodoList: Component<Props> = (props: Props) => {

  return (
    <section class='flex flex-col items-center gap-y-2 w-full'>
      <For each={props.todoList}>{(todo, i) => {
        return <Todo index={i()} name={todo.name} done={todo.done()} onDone={todo.setDone} onRemove={props.removeTodo} />
      }
      }</For>
    </section>

  )
}
