import React, { useReducer } from 'react';
import {initialState, reducer} from "./reducers/todoReducer";
import './App.css';

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">

    </div>
  );
}

export default App;
