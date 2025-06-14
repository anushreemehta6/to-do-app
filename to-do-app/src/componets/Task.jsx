import React, { useState, useEffect } from 'react';

function Task() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) 
      settodos(todos)
    }
  }, [])
  

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }


  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((item, idx) => {
      if (idx === index) {
        return { ...item, iscompleted: !item.iscompleted };
      }
      return item;
    });
    settodos(updatedTodos);
  };

  const handleDelete = (index) => {
    const latestTodos = todos.filter((_, idx) => idx !== index);
    settodos(latestTodos);
     saveToLS()
  };

  const handleAdd = () => {
    if (todo.trim() === "") return;
    settodos([...todos, { todo: todo.trim(), iscompleted: false }]);
    settodo("");
     saveToLS()
  };

  const handleChange = (e) => {
    settodo(e.target.value);
  };

  const handleEdit = (item, index) => {
    setEditIndex(index);
    setEditValue(item.todo);
     saveToLS()
  };

  const handleUpdate = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex].todo = editValue.trim();
    settodos(updatedTodos);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className='w-screen px-4 sm:px-6 lg:px-8 my-5'>
      <div className="max-w-7xl mx-auto rounded-xl py-5" style={{ backgroundColor: '#b9e8dc' }}>
        <h1 className='font-bold text-2xl px-3 py-3'>Add a task</h1>
        <div className="input flex gap-4">
          <input
            value={todo}
            onChange={handleChange}
            className='text-xl px-3 ml-2 text-white rounded-lg w-1/2'
            type="text"
            style={{ backgroundColor: 'rgb(14, 36, 47)' }}
            placeholder='Add your task here'
          />
          <button 
  onClick={handleAdd}
  disabled={todo.length <= 1}
  className="bg-cyan-950 text-white px-6 rounded-sm text-xl font-semibold disabled:bg-red-500 hover:bg-white hover:text-cyan-500 hover:shadow-lg transition duration-300 ease-in-out"
>
  Add
</button>
        </div>
      </div>

      <div className="todes max-w-7xl mx-auto rounded-xl py-5 mt-6" style={{ backgroundColor: '#b9e8dc' }}>
        <div className="todo flex flex-col gap-4">
          {todos.map((item, index) => (
            <div key={index} className="flex items-center justify-between ml-2 mr-2">
              <div className="wrap flex gap-2">
                <button
                  onClick={() => handleToggleComplete(index)}
                  className={`w-8 h-8 rounded transition-colors duration-300 ${item.iscompleted ? "bg-green-600" : "bg-cyan-950"}`}
                ></button>

                {editIndex === index ? (
                  <input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="text-lg px-2 rounded bg-cyan-950 text-white"
                  />
                ) : (
                  <div className={`${item.iscompleted ? 'line-through' : ''} text-lg`}>
                    {item.todo}
                  </div>
                )}
              </div>

              <div className="buttons flex gap-4 ml-2">
                {editIndex === index ? (
                  <button
                    onClick={handleUpdate}
                    className="text-white px-6 rounded-md text-xl font-semibold hover:bg-white hover:text-cyan-500 hover:shadow-lg transition duration-300 ease-in-out"
                    style={{ backgroundColor: 'green' }}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(item, index)}
                    className="text-white px-6 rounded-md text-xl font-semibold hover:bg-white hover:text-cyan-500 hover:shadow-lg transition duration-300 ease-in-out"
                    style={{ backgroundColor: 'rgb(14, 36, 47)' }}
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() => handleDelete(index)}
                  className="text-white px-6 rounded-md text-xl font-semibold hover:bg-white hover:text-cyan-500 hover:shadow-lg transition duration-300 ease-in-out"
                  style={{ backgroundColor: 'rgb(14, 36, 47)' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Task;
