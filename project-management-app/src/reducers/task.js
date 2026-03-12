// task = [
//     {id, title, boardId, listId},
//     {id, title, boardId, listId},
//     {id, title, boardId, listId}
// ]

export const taskReducer = (tasks = [], action) => {
    switch(action.type) {
        case "CREATE_TASK": {
            const newTask = {
                id: action.payload.id,
                title: action.payload.title,
                boardId: action.payload.boardId,
                listId: action.payload.listId,
            }
            return [...tasks, newTask];
        }
        case "CHANGE_TASK_TITLE": {
            return tasks.map(element => {
                if(element.id === action.payload.id) {
                    return {
                        ...element,
                        title: action.payload.title
                    }
                }
                return element;
            })
        }
        case "REMOVE_TASK": {
            return tasks.filter(element => {
                return element.id !== action.payload.id
            })
        }
        case "CHANGE_LIST_ID_OF_A_TASK": {
            return tasks.map(element => {
                if(element.id === action.payload.id) {
                    return {
                        ...element,
                        listId: action.payload.listId
                    }
                }
                return element;
            })
        }
        case "CHANGE_BOARD_ID_OF_A_TASK": {
            return tasks.map(element => {
                if(element.id === action.payload.id) {
                    return {
                        ...element,
                        boardId: action.payload.boardId
                    }
                }
                return element;
            })
        }
        default: {
            return tasks;
        }
    }
}