// lists =[
//     {id, title, boardId, tasks: ["task 1", "task 2"]},
//     {id, title, boardId, tasks: ["task 1", "task 2"]},
//     {id, title, boardId, tasks: ["task 1", "task 2"]}
// ]


export const listReducer = (lists = [], action) => {
    switch(action.type) {
        case "CREATE_LIST": {
            const newList = {
                id: action.payload.id, //doubt
                title: action.payload.title,
                boardId: action.payload.boardId,
                tasks: []
            }
            return [...lists, newList];
        }
        case "CHANGE_LIST_NAME": {
            return lists.map(element => {
                if(element.id === action.payload.id) {
                    return {
                        ...element,
                        title: action.payload.title
                    }
                }
                return element;
            })
        }
        case "CHANGE_BOARD_ID": {
            return lists.map(element => {
                if(element.id === action.payload.id) {
                    return {
                        ...element,
                        boardId: action.payload.boardId
                    }
                }
                return element;
            })
        }
        case "REMOVE_LIST": {
            return lists.filter(element => {
                return element.id !== action.payload.id
            })
        }
        case "ADD_TASK_ID_TO_A_LIST": {
            return lists.map(element => {
                if(element.id === action.payload.id) {
                    return {
                        ...element,
                        tasks: [
                            ...element.tasks,
                            action.payload.taskId
                        ]
                    }
                }
                return element;
            })
        }
        case "REMOVE_TASK_ID_FROM_A_LIST": {
            return lists.map(element => {
                if(element.id === action.payload.id) {
                    return {
                        ...element,
                        tasks: element.tasks.filter(item => {
                            return item !== action.payload.taskId
                        })
                    }
                }
                return element;
            })
        }
        default: {
            return lists;
        }
    }
}