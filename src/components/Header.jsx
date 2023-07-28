 
import Addded from '../assets/images/plus.png'
import Notes from '../assets/images/notes.png'
import DobleTick from '../assets/images/double-tick.png'
import { useDispatch } from 'react-redux';
import { added } from '../Redux/todos/action';

const Header = () => {
    const dispatch = useDispatch()


    const  addtodohandler = (event) => {
        event.preventDefault()
        const text = event.target.text.value
        dispatch(added(text))
    }

    return (
        <div>
        <form
        onSubmit={addtodohandler}
            className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        >
            <img
                src={Notes}
                className="w-6 h-6"
                alt="Add todo"
            />
            <input
                type="text"
                name='text'
                placeholder="Type your todo"
                className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
            />
            <button
                type="submit"
                className={`appearance-none w-8 h-8 bg-[url(${Addded})] bg-no-repeat bg-contain`}
            ></button>
        </form>

        <ul className="flex justify-between my-4 text-xs text-gray-500">
            <li className="flex space-x-1 cursor-pointer">
                <img
                    className="w-4 h-4"
                    src={DobleTick}
                    alt="Complete"
                />
                <span>Complete All Tasks</span>
            </li>
            <li className="cursor-pointer">Clear completed</li>
        </ul>
    </div>
    );
};

export default Header;