'use client';
import React from 'react';

const Todo = (props: any) => {
      
  const handleCheck = () => {
    props.onChangeClick(props.todo.id);
  };

  const handleDelete = () => {
    props.onDeleteClick(props.todo.id);
  };

  return (
    <li className="flex justify-between items-start mt-4">
        <label className='mr-2'>
          <input
            type="checkbox"
            onChange={handleCheck}
            checked={props.todo.complete}
            className='mr-2 peer'
          />
            <span className='peer-checked:line-through'>
              {props.todo.title}
            </span>
        </label>
        <button onClick={handleDelete} className="rounded-lg bg-indigo-700 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Del</button>
      </li>
  );
};

const AddForm = (props: any) => {
  const [title, setTitle] = React.useState('');
  const inputRef = React.useRef(null);

  const handleTextChange = (e: any) => {
    setTitle(e.currentTarget.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.onSubmit(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex gap-2 mt-4'>
      <input
        type="text"
        value={title}
        onChange={handleTextChange}
        ref={inputRef}
        className='flex-1 p-1 text-gray-700'
      />
        <button className="rounded-lg bg-indigo-700 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add</button>
    </form>
  );
};

const App = () => {
  const [todos, setTodos] = React.useState([]);

  // React.useEffect(() => {
  //   let savedTodos: any;
  //   if (localStorage.getItem('todos') === null) {
  //     savedTodos = [];
  //   } else {
  //     savedTodos = JSON.parse(localStorage.getItem('todos'));
  //   }
  //   setTodos(savedTodos);
  // });

  const updateTodos = (newTodos: any) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

    const handlePurgeClick = () => {
      if (!confirm('Sure?')) {
      return;
    }
      const newTodos = todos.filter((todo: any) => {
        return todo.complete === false;
      });
      updateTodos(newTodos);
    }

    const handleAddFormSubmit = (title: any) => {
      const newTodos: any = [...todos];
      newTodos.push({
        id: Date.now(),
        title: title,
        complete: false,
      });
      updateTodos(newTodos);
    };

  const handleTodoCheckboxChange = (id: any) => {
    const newTodos = todos.map((todo: any) => {
      return {
        id: todo.id,
        title: todo.title,
        complete: todo.id === id ? !todo.complete : todo.complete,
      };
    }) 
    updateTodos(newTodos);
  };

  const handleTodoDeleteClick = (id: any) => {
    if (!confirm('Sure?')) {
      return;
    }
    const newTodos = todos.filter((todo: any) => {
      return todo.id !== id;
    });
    updateTodos(newTodos);
  };

  const todoItems = todos.map((todo: any) => {
    return (
      <Todo 
      key={todo.id}
      todo={todo}
      onDeleteClick={handleTodoDeleteClick}
      onChangeClick={handleTodoCheckboxChange}
      />
    );
  });

  return (
  <div className="w-96 my-4 mx-auto">
    <h1 className="text-2xl border-b-1 border-solid border-gray-400 flex justify-between items-start pt-2 pb-2">
      My Todos
      {/* <button type="button" onClick={handlePurgeClick}>Purge</button> */}
      <a
                onClick={handlePurgeClick}
                className="rounded-lg bg-indigo-700 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Purge</a>
              
    </h1>
    <ul className="m-0 p-0 list-none">
      {todoItems}
    </ul>
    <AddForm
    onSubmit={handleAddFormSubmit}
    />

  </div>
  )
};

export default App;