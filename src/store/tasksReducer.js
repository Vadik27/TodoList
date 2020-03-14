export const initialState = {
    tasks: []
};

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [ {id: Date.now(), title: action.title, isDone: false}, ...state.tasks ]
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(currentTask => currentTask !== action.task)
            };
        case 'UPDATE_TASK':
            action.task.isDone = !action.task.isDone;
            return {
                ...state,
                tasks: [...state.tasks]
            };
        default:
            return [state.tasks];
    }
};

export const addTaskAC = title => ({type: 'ADD_TASK', title});
export const deleteTaskAC = task => ({type: 'DELETE_TASK', task});
export const updateTaskAC = task => ({type: 'UPDATE_TASK', task});