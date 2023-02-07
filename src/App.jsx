import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';

function App() {
  const {
		todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo,
	} = useTodo();

  return (
  <>
        <div className='card-to-do'>
          <h1>CITAS PARA DIVERTIRTE CON TU PAREJA</h1>
          <div className='counter-todos'>
          <h3>
						N° Citas: <span>{todosCount}</span>
					</h3>
					<h3>
						Pendientes: <span>{pendingTodosCount}</span>
					</h3>
        </div>

        <div className='add-todo'>
          <h3>Agregar Cita</h3>
					<TodoAdd handleNewTodo={handleNewTodo} />
        </div>

      <TodoList 
      todos={todos}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
    </div>

   </>
  );
}

export default App;
