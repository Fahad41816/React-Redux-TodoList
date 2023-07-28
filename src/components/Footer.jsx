import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorselect, statuchage } from '../Redux/filter/filterAction';

const Footer = () => {

    const todo = useSelector(State => State.todo)
    const filter = useSelector(State => State.filter)

    const dispatch = useDispatch()
    const todoRmaining = todo.filter(todo => !todo.completed).length

    const { colors } = filter;
    
    const handlerStatusChange = (Status) => {
        
        dispatch(statuchage(Status))
        

    }


    const handlecolorchange =(color) => {
         
        if(colors.includes(color)) {
            dispatch(colorselect(color, "remove"));
        } else {
            dispatch(colorselect(color, "add"));
         
        }      

    }

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p>{todoRmaining} tasks left</p>
        <ul className="flex space-x-1 items-center text-xs">
            <li className="cursor-pointer font-bold" onClick={() => handlerStatusChange("All")}>All</li>
            <li>|</li>
            <li className="cursor-pointer"  onClick={() => handlerStatusChange("Incomplete")}>Incomplete</li>
            <li>|</li>
            <li className="cursor-pointer"  onClick={() => handlerStatusChange("Complete")}>Complete</li>
            <li></li>
            <li></li>
            <li
                className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes("green") && "bg-green-500" }`} onClick={()=> handlecolorchange("green")} 
            ></li>
            <li
                className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes("red") && "bg-red-500"}`}
                onClick={()=> handlecolorchange("red")} 
            ></li>
            <li
                className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes("yellow") && "bg-yellow-500"}`}
                onClick={()=> handlecolorchange("yellow")} 
            ></li>
        </ul>
    </div>
    );
};

export default Footer;