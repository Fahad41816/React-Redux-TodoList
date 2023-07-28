import { completeAll } from "./action";
import { ADDED, CLEARCOMPLETED, COLORADD, DELETED, TOGGLE } from "./actiontype";
import initialState from "./initialState";

const addid = (todos) => {

    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;

}

const TodoReducer = (State = initialState, action) => {

    switch (action.type) {
        case ADDED:
            return[
                ...State,
                {
                    id: addid(State),
                    title: action.payload 
                }
            ]
        case DELETED:
            return  State.filter(todo => todo.id !== action.payload)

        case TOGGLE: 
            return State.map(todo => {
                if(todo.id !== action.payload){
                    return todo
                                       
                }
                return{
                    ...todo,
                    completed: !todo.completed
                }
            })

          

        case COLORADD: 
        const { id, colors } = action.payload;
        return State.map((todo) => {
            if (todo.id !== id) {
                return todo;
            }
            return {
                ...todo,
                color: colors,
            };
        });

        case completeAll:
            return State.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })

        case CLEARCOMPLETED:
             return State.filter(todo => todo.completed !== true)
            
    
        default:
            return State;
    }

}


export default TodoReducer