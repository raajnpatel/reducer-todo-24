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
        default:
            return state;
    }
};