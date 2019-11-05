export const initialState = {
    todoArray:
        [
            {
                item: 'Learn about reducers',
                completed: false,
                id: Date.now(),
            }
        ]
};
    export const reducer = (state, action) => {
        console.log(action);
    switch(action.type){
        case "ADD_TODO":
            return {
                ...state,
                todoArray: [...state.todoArray, {
                    item: action.payload,
                    completed: false,
                    id: Date.now(),
                }]
            }
        case "TOGGLE_TODO":
            return {
                ...state,
                todoArray: state.todoArray.map(todo => {
                    if(todo.id === action.payload){
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } else {
                        return todo;
                    }
        })};
        default:
            return state;
    }
};