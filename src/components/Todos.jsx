import Todo from './Todo';
import { useSelector } from 'react-redux';

const Todos = () => {

    const filter = useSelector(state => state.filter)
   
    const Data = useSelector(state =>  state.todo)
    
    return (
        <div  className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
           {
            Data.filter(todo =>{
                const {status} = filter;
                
                switch(status){
                    case "complete":
                        return todo.completed
                    case "Incomplete":
                        return !todo.completed
                    default:
                        return true    
                }
           }).filter(todo => {
                const {colors} = filter;
                if(colors.length > 0){
                    return colors.includes(todo?.color)
                }
                return true
           }).map(todo => (
                <Todo  key={todo.id} TodoData={todo}></Todo>                    
            ))
           }
        </div>
 
    );
};

export default Todos;