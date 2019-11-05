import React, {useState} from 'react';

const TodoForm = props => {
    const [item, setItem] = useState ("");
    const handleChange = event => setItem(event.target.value);
    return (
        <form>
            <input
                type = "text"
                name = "item"
                placeholder="todo"
                value = {item}
                onChange = {handleChange}
            />
            <button type="submit">Add Todo</button>
        </form>
    )
};

export default TodoForm;