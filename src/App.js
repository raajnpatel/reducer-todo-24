import React, { useReducer } from 'react';
import {initialState, reducer} from "./reducers/todoReducer";
import './App.css';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addTodo = item => {
        dispatch({ type: "ADD_TODO", payload: item })
    };

    const toggleTodo = id => {
        dispatch({type: "TOGGLE_TODO", payload: id})
    }
  return (
    <div className="App">
        <TodoList todoArray = {state.todoArray} toggleTodo={toggleTodo}/>
        <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
