

//we will track both lists and tasks under board by their Ids
// boards = [
//     {id, title, lists: [`listId 1`, `listId 2`], tasks: [`taskId 1`, `taskId 2`]},
//     {id, title, lists: [`listId 1`, `listId 2`], tasks: [`taskId 1`, `taskId 2`]},
//     {id, title, lists: [`listId 1`, `listId 2`], tasks: [`taskId 1`, `taskId 2`]},
// ]

export const boardReducer = (boards = [], action) => {
    switch(action.type) {
        case "CREATE_BOARD": {
            const newBoard = {
                id: Date.now()+"",
                title: action.payload.title,
                lists: [],
                tasks: []
            }
           return [...boards, newBoard];
        }
        case "CHANGE_BOARD_NAME": {
           return boards.map(element => {
                if(element.id===action.payload.id) {
                    return {
                        ...element,
                        title: action.payload.title
                    }
                }
                return element;
            })
        }
        case "REMOVE_BOARD": {
            return boards.filter((element) => {
                return (element.id !== action.payload.id);
            })
        }
        case "ADD_LIST_ID_TO_A_BOARD": {
          return boards.map(element => {
                if(element.id === action.payload.id) {
                    return {
                        ...element,
                        lists: [
                            ...element.lists,
                            action.payload.listId
                        ]
                    }
                }
                element;
            })
        }
        case "REMOVE_LIST_ID_FROM_A_BOARD": {
            return boards.map(element => {
                if(element.id===action.payload.id) {
                    return {
                        ...element,
                        lists: element.lists.filter(item => {
                            return item!==action.payload.listId;
                        })
                    }
                }
               return element;
            })
        }
        case "ADD_TASK_ID_TO_A_BOARD": {
            return boards.map(element => {
                if(element.id === action.payload.id) {
                    return {
                        ...element,
                        tasks: [
                            ...element.tasks,
                            action.payload.taskId
                        ]
                    }
                }
                element;
            })
        }
        case "REMOVE_TASK_ID_FROM_A_BOARD": {
            return boards.map(element => {
                if(element.id===action.payload.id) {
                    return {
                        ...element,
                        tasks: element.tasks.filter(item => {
                            return item!==action.payload.taskId;
                        })
                    }
                }
               return element;
            })
        }
        default : {
            return boards;
        }
    }
}