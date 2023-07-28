import { COLORCHANGE, STATUS } from "./filterActionType";
import filterInitialState from "./filterInitialState"


const filterReducer = (state= filterInitialState, action) => {

    switch (action.type) {
        case STATUS:
            return{
                ...state,
                status: action.payload
            }    

        case COLORCHANGE:
            const { color, changeType } = action.payload;

            switch (changeType) {
                case "add":
                    return {
                        ...state,
                        colors: [...state.colors, color],
                    };

                case "remove":
                    return {
                        ...state,
                        colors: state.colors.filter(
                            (existingColor) => existingColor !== color
                        ),
                    };

                default:
                    return state;
            }

        default:
            return state
    }

}


export default filterReducer