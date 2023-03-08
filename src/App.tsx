import { createSignal } from 'solid-js';
import type { Accessor, Setter, Component } from 'solid-js';
import { AddTodo, Button, TodoList } from './components';

const App: Component = () => {

  const [todoList, setTodoList] = createSignal<{ name: string, done: Accessor<boolean>, setDone: Setter<boolean> }[]>([]);
  const [showAddDialog, setShowAddDialog] = createSignal<boolean>(false);

  function addTodo(name: string) {
    const [done, setDone] = createSignal<boolean>(false);
    setTodoList(prev => ([...prev, { name, done, setDone }]));
  }

  function removeTodo(index: number) {
    const list = Array.from(todoList());
    list.splice(index, 1);
    setTodoList(list);
  };

  return (
    <main class="flex justify-center w-full min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 pt-[5rem] sm:pt-[20rem]">
      <article class='flex flex-col gap-10 items-center sm:shadow-xl sm:border-[1px] border-white/10 border-solid rounded w-full max-w-[900px] h-fit p-8'>

        <header>
          <h1 class='text-4xl font-semibold text-white mt-20'>Task List</h1>
        </header>

        <TodoList todoList={todoList()} removeTodo={removeTodo} />

        <footer class='flex justify-end w-full p-2 '>
          <Button onClick={() => setShowAddDialog(true)} >Add</Button>
        </footer>

      </article>
      <AddTodo setShowModal={setShowAddDialog} showModal={showAddDialog()} addTodo={addTodo} />
    </main>
  );
};

export default App;
